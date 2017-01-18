const User = require('../src/user');
const Comment = require('../src/comment');
const BlogPost = require('../src/blogPost');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

beforeAll((done) => {
  if (!!mongoose.connection.db) return done();
  mongoose.connect('mongodb://localhost/users_test');
  mongoose.connection
    .once('open', () => {
      done()
    })
    .on('error', error => {
      console.warn('Warning', error)
    })
})

beforeEach(done => {
  const {users, comments, blogposts} = mongoose.connection.collections;
  users.drop(() => {
    comments.drop(() => {
      blogposts.drop(() => {
        done();
      })
    })
  });
});

afterAll(done => {
  mongoose.connection.close(() => {
    done();
  });
});

describe('Creating records', () => {
  it('saves a user', (done) => {
    const mikey = new User({name: 'Mikey'});
    mikey.save().then(
      () => {
        expect(!!mikey.isNew).toBe(false);
        done();
      }
    )
  });
})

describe('Reading users out of the database', () => {
  let mikey, maria, alex, zach;
  beforeEach((done) => {
    alex = new User({name: 'Alex'});
    maria = new User({name: 'Maria'});
    mikey = new User({name: 'Mikey'});
    zach = new User({name: 'Zach'});

    Promise.all([alex.save(), maria.save(), mikey.save(), zach.save()])
      .then(() => done());
  })

  it('finds all users with a name of mikey', done => {
    User.find({ name: 'Mikey' })
      .then(users => {
        expect(String(users[0]._id)).toBe(String(mikey._id))
        done();
      })
  });

  it('finds a user with a particular id', done => {
    User.findOne({_id: mikey._id})
      .then(user => {
        expect(user.name).toBe('Mikey');
        done();
      })
  })

  it('can skip and limit the result set', done => {
    User.find({})
      .sort({name: 1})
      .skip(1)
      .limit(2)
      .then(users => {
        expect(users.length).toBe(2)
        expect(users[0].name).toBe('Maria')
        expect(users[1].name).toBe('Mikey')
        done();
      })
  })
});

describe('Deleting a user', () => {
  let mikey;
  beforeEach(done => {
    mikey = new User({name: 'Mikey'});
    mikey.save()
      .then(() => done());
  })

  it('model instance remove', (done) => {
    mikey.remove()
      .then(() => User.findOne({name: 'Mikey'}))
      .then(user => {
        expect(user).toBe(null)
        done()
      })
  })

  it('class method remove', (done) => {
    User.remove({name: 'Mikey'})
      .then(() => User.findOne({name: 'Mikey'}))
      .then(user => {
        expect(user).toBe(null)
        done()
      })
  })

  it('class method findAndRemove', (done) => {
    User.findOneAndRemove({name: 'Mikey'})
      .then(() => User.findOne({name: 'Mikey'}))
      .then(user => {
        expect(user).toBe(null)
        done()
      })
  })

  it('class method findByIdAndRemove', (done) => {
    User.findByIdAndRemove(mikey._id)
      .then(() => User.findOne({name: 'Mikey'}))
      .then(user => {
        expect(user).toBe(null)
        done()
      })
  })
})

describe('updating records', () => {
  let mikey;
  beforeEach(done => {
    mikey = new User({
      'name': 'Mikey',
      likes: 0
    })
    mikey.save()
      .then(() => done())
  })

  it('instance type using set & save', done => {
    mikey.set('name', 'Jongwook');
    assertName(mikey.save(), done);
  })

  it('a model instance can update', done => {
    assertName(mikey.update({name: 'Jongwook'}), done);
  })

  it('a model class can update', done => {
    assertName(
      User.update({name: 'Mikey'}, {name: 'Jongwook'}),
      done
    )
  })

  it('a model class can update one record', done => {
    assertName(
      User.findOneAndUpdate({name: 'Mikey'}, {name: 'Jongwook'}),
      done
    )
  })

  it('a model class can find a record with an ID and update', done => {
    assertName(
      User.findByIdAndUpdate(mikey._id, {name: 'Jongwook'}),
      done
    )
  })

  it('a user can have their likes incremented by 10', done => {
    User.update({name: 'Mikey'}, {$inc: {likes: 10}})
      .then(() => User.findOne({name: 'Mikey'}))
      .then(user => {
        expect(user.likes).toBe(10);
        done();
      })
  })

  function assertName(operation, done) {
    operation
      .then(() => User.find({}))
      .then(users => {
        expect(users.length).toBe(1);
        expect(users[0].name).toBe('Jongwook');
        done();
      })
  }
})

describe('Validating records', () => {
  it('requires a user name', () => {
    const user = new User({name: undefined});
    const validationResult = user.validateSync();
    const {message} = validationResult.errors.name;
    expect(message).toBe('Name is required.');
  })

  it('requires users name longer than 2 characters', () => {
    const user = new User({name: 'Al'});
    const validationResult = user.validateSync();
    const {message} = validationResult.errors.name;
    expect(message).toBe('Name must be longer than 2 characters.');
  })

  it('disallows invalid records from being saved', done => {
    const user = new User({name: 'Al'});
    user.save()
      .catch((validationResult) => {
        const {message} = validationResult.errors.name;
        expect(message).toBe('Name must be longer than 2 characters.');
        done();
      })
  })
})

describe('Subdocuments', () => {
  it('can create a subdocument', done => {
    const mikey = new User({
      name: 'Mikey',
      posts: [{title: 'PostTitle'}]
    })
    mikey.save()
      .then(() => User.findOne({name: 'Mikey'}))
      .then(user => {
        expect(user.posts[0].title).toBe('PostTitle');
        done();
      })
  })

  it('can add subdocuments to an existing record', done => {
    const mikey = new User({
      name: 'Mikey',
      posts: []
    })

    mikey.save()
      .then(() => User.findOne({name: 'Mikey'}))
      .then(user => {
        user.posts.push({title: 'New Post'})
        return user.save();
      })
      .then(() => User.findOne({name: 'Mikey'}))
      .then(user => {
        expect(user.posts[0].title).toBe('New Post');
        done();
      })
  })

  it('can remove an existing subdocument', done => {
    const mikey = new User({
      name: 'Mikey',
      posts: [{title: 'New Title'}]
    })

    mikey.save()
      .then(() => User.findOne({name: 'Mikey'}))
      .then(user => {
        const post = user.posts[0];
        post.remove();
        return user.save();
      })
      .then(() => User.findOne({name: 'Mikey'}))
      .then(user => {
        expect(user.posts.length).toBe(0);
        done();
      })
  })
})

describe('Virtual types', () => {
  it('postCount returns number of posts', done => {
    const mikey = new User({
      name: 'Mikey',
      posts: [{title: 'PostTitle'}]
    })
    mikey.save()
      .then(() => User.findOne({name: 'Mikey'}))
      .then(user => {
        expect(user.postCount).toBe(1);
        done();
      })
  })
})

describe('Associations', () => {
  let mikey, blogPost, comment;
  beforeEach(done => {
    mikey = new User({name: 'Mikey'});
    blogPost = new BlogPost({title: 'JS is great', content: 'Yep it really is'});
    comment = new Comment({content: 'Congrats on a great post'});

    mikey.blogPosts.push(blogPost);
    blogPost.comments.push(comment);
    comment.user = mikey;

    Promise.all([mikey.save(), blogPost.save(), comment.save()])
      .then(() => done());
  })

  it('saves a relation between a user and a blogpost', done => {
    User.findOne({name: 'Mikey'})
      .populate('blogPosts')
      .then(user => {
        expect(user.blogPosts[0].title).toBe('JS is great');
        done();
      })
  })

  it('saves a full relation graph', done => {
    User.findOne({name: 'Mikey'})
      .populate({
        path: 'blogPosts',
        populate: {
          path: 'comments',
          model: 'comment',
          populate: {
            path: 'user',
            model: 'user'
          }
        }
      })
      .then(user => {
        expect(user.name).toBe('Mikey')
        expect(user.blogPosts[0].title).toBe('JS is great');
        expect(user.blogPosts[0].comments[0].content).toBe('Congrats on a great post');
        expect(user.blogPosts[0].comments[0].user.name).toBe('Mikey')
        done();
      })
  })
})

describe('Middleware', () => {
  let mikey, blogPost;
  beforeEach(done => {
    mikey = new User({name: 'Mikey'});
    blogPost = new BlogPost({title: 'JS is great', content: 'Yep it really is'});

    mikey.blogPosts.push(blogPost);

    Promise.all([mikey.save(), blogPost.save()])
      .then(() => done());
  })

  it('users clean up dangling blogposts on remove', done => {
    mikey.remove()
      .then(() => BlogPost.count())
      .then(count => {
        expect(count).toBe(0)
        done()
      })
  })
})

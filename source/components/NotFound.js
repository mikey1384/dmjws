import React, {Component} from 'react';
import PageHeading from 'components/PageHeading';

export default class Home extends Component {
  render() {
    return (
      <div>
        <PageHeading
          title="😭DMJW's😭"
        />
        <p>We are sorry.
          The requested page could not be found.
        </p>
        <p>The address of the page you wish to visit is entered incorrectly.
        We can not find the requested page because the address on the page was changed or deleted.</p>
        <p>Please check again that the address you entered is correct.</p>
        <p>すみません 要請したページが見つかりません。 訪問しようとするページの住所が間違って入力されたり、ページの住所が変更・削除されて要請したページが見つかりません。 入力した住所が正しいかどうかをもう一度確認してください。</p>
         <button onClick="setTimeout(myFunction, 3000);">Home Website</button>
      </div>
    )
    function myFunction() {
      location.replace("http://www.dmjws.website")
    }
  }
}

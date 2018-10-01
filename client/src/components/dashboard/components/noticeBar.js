import React from 'react';

export function noticeBar(noticeList) {
  return (
    <div className="level">
      { noticeList }
    </div>
  );
}

export function verifyEmailNotice(key) {
  return (
    <div key={key} className="notification is-warning">
      <p>
        Please verify your email address by visiting the link sent to it.
      </p>
      <p>
        <a href="/">Resend Link</a>
      </p>
    </div>
  );
}

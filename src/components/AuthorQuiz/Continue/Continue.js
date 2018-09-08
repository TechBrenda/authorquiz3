import React from 'react';
import '../../../style/bootstrap.min.css';
import './Continue.css';

export function Continue({show, onContinue}) {
  return (
    <div className="row continue">
      { show
        ? <div className="col-11">
            <button className="btn btn-primary btn-lg float-right" onClick={onContinue}>Continue</button>
          </div>
        : null
      }
    </div>
  );
}
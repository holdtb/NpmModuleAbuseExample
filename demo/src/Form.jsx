import React, { Component } from 'react';
import { usefulFn } from 'bad_juju'; // Exploit applied
import './Form.css';

const setCookie = (name, value, daysUntilExpiration) => {
  const d = new Date();
  d.setTime(d.getTime() + daysUntilExpiration * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
};

export default class Form extends Component {
  constructor(props, context) {
    super(props, context);
    usefulFn(); // This did not need to be called to work
    setCookie('bad_juju', 'Hello from bad_juju', 1);
  }

  render() {
    return (
      <form>
        <div style={styles.formInput}>
          <label htmlFor="username" style={{ width: 5 }}>
            Username:
            <input id="username" name="username" style={styles.inputMargin} />
          </label>
        </div>

        <div style={styles.formInput}>
          <label htmlFor="password">
            Password:
            <input id="password" name="password" type="password" style={styles.inputMargin} />
          </label>
        </div>
        <div style={styles.formInput}>
          <label htmlFor="creditCardNum">
            Credit Card:
            <input id="ccnum" name="creditCard" style={styles.inputMargin} />
          </label>
        </div>
        <input type="submit" className="submitBtn" />
      </form>
    );
  }
}

const styles = {
  formInput: {
    padding: 15,
  },
  inputMargin: {
    marginLeft: 15
  },
};

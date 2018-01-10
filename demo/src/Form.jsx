import React, { Component } from 'react';
import { usefulFn } from 'bad_juju'; // Exploit applied

export default class Form extends Component {
  constructor(props, context) {
    super(props, context);
    usefulFn(); // This did not need to be called to work
  }
  render() {
    return (
      <form>
        <div style={styles.formInput}>
          <label htmlFor="username">
            Username:
            <input id="username" name="username" />
          </label>
        </div>

        <div style={styles.formInput}>
          <label htmlFor="password">
            Password:
            <input id="password" name="password" type="password" />
          </label>
        </div>
        <div style={styles.formInput}>
          <label htmlFor="creditCardNum">
            Credit Card:
            <input id="creditCardNum" name="creditCardNum" />
          </label>
        </div>
        <input type="submit" />
      </form>
    );
  }
}

const styles = {
  formInput: {
    padding: 15,
  },
};
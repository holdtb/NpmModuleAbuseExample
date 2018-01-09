import React, { Component } from 'react';
import { usefulFn } from 'bad_juju'; // Exploit applied

export default class Form extends Component {
  render() {
    usefulFn(); // this DOES NOT need to be called

    return (
      <form>
        <div style={styles.formInput}>
          <label>Username: </label>
          <input id="username" name="username" />
        </div>

        <div style={styles.formInput}>
          <label>Credit Card: </label>
          <input id="ccnum" name="ccnum" />
        </div>

        <input type="submit" />
      </form>
    );
  }
}

const styles = {
  formInput: {
    padding: 15
  }
};

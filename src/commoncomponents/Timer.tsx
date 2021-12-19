import { Button } from "@material-ui/core";
import React, { Component } from "react";

class Timer extends React.Component<any, any> {
  timerInterval: any;
  secs: any;
  resend: any;
  constructor(props: any) {
    super(props);
    this.state = { time: {}, seconds: 3, resend: true };
    //   this.resend = false;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs: any) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  }

  componentDidMount() {
    this.startTimer();
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
    if (!this.timerInterval && this.state.seconds > 0) {
      this.timerInterval = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timerInterval);

      this.setState({
        time: this.secondsToTime(3),
        seconds: seconds,
      });
    }
  }

  onClickResend = () => {
    this.setState(
      {
        resend: true,
        seconds: 3,
      },
      () => {
        this.timerInterval = setInterval(this.countDown, 1000);
      }
    );
    // this.timerInterval=setInterval(this.countDown, 1000);
    console.log(this.state.resend);
  };

  render() {
    return (
      <div>
        <div>
          {this?.state?.seconds === 0 ? (
            <Button
              onClick={this.onClickResend}
              aria-disabled={this?.state?.seconds !== 0}
            >
              Resend
            </Button>
          ) : (
            `Resend in 0${this.state.time.m} : 0${this.state.time.s}`
          )}{" "}
        </div>
      </div>
    );
  }
}

export default Timer;

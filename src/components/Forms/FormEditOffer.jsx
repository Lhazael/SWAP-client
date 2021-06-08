import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { withUser } from "../Auth/withUser";
import Button from "../Base/Button";

export default withRouter(withUser(FormEditOffer));
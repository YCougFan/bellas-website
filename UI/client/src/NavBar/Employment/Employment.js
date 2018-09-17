import React from 'react';

const Employment = () => {
    return (
        <div>
            <h1>Job Application</h1>
            <form>
                <h3>Personal Information</h3>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group has-error has-danger">
                            <input type="text"
                                   className="form-control"
                                   name="firstname"
                                   placeholder="First Name"
                                   required=""/>
                        </div>
                        <div className="form-group">
                            <input type="text"
                                   className="form-control"
                                   name="lastname"
                                   placeholder="Last Name"
                                   required=""/>
                        </div>
                    </div>
                <div className="hidden-lg">
                    <br/>
                </div>
                <div className="form-group has-error has-danger">
                    <input type="text"
                           className="form-control"
                           name="address" placeholder="Address"
                           required=""/>
                </div>
                <div className="form-group">
                    <input type="text"
                           className="form-control"
                           name="city"
                           placeholder="City"
                           required=""/>
                </div>
                <div className="form-group">
                    <input type="text"
                           className="form-control"
                           name="state"
                           placeholder="State"
                           required="" maxLength="2"/>
                </div>
                <div className="form-group">
                    <input type="text"
                           className="form-control"
                           name="zip"
                           placeholder="Zip"
                           required=""
                           maxLength="5"/>
                </div>
                <div className="hidden-lg">
                    <br/>
                </div>
                <div className="form-group">
                    <input type="tel"
                           className="form-control"
                           name="phone"
                           placeholder="Phone"
                           data-format="(999) 999-9999"
                           required=""/>
                </div>
                <div className="form-group">
                    <input type="tel"
                           className="form-control"
                           name="alternate"
                           placeholder="Alternate Phone"
                           data-format="(999) 999-9999"/>
                </div>
                <div className="form-group">
                    <input type="email"
                           className="form-control"
                           name="email"
                           placeholder="Email Address"
                           required=""/>
                </div><br/>
                <div className="form-group has-error has-danger">
                    <label className="control-label">
                        Date of Birth
                    </label><br/>
                    <input type="date"
                           className="form-control"
                           name="dob"
                           required=""/>
                </div>
                <div className="well">
                    <h3>Availability Information</h3>
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                             <div className="form-group">
                                 <input type="hidden"
                                        name="available-fulltime"
                                        value="false"/>
                                    <button type="button" className="btn btn-default">
                                        <span className="text-muted">N</span>
                                    </button>
                               Available Full Time (28 or more hrs per week)
                             </div>
                            <div className="form-group">
                                <input type="hidden"
                                       name="available-parttime"
                                       value="false"/>
                                <button type="button" className="btn btn-default">
                                    <span className="text-muted">N</span>
                                </button>
                                Available Part Time (less than 28 hrs per week)
                            </div>
                            <div className="form-group">
                                <input type="hidden"
                                       name="available-overttime"
                                       value="false"/>
                                <button type="button" className="btn btn-default">
                                    <span className="text-muted">N</span>
                                </button>
                               Available for Overtime (40+ hours per week)
                            </div>
                        </div>
                    </div>
                    {/*<div style="width: 400px">*/}
                        <div>
                        <h5>How many days after hire date can you start working?</h5>
                        <div className="form-group">
                            <input type="number"
                                   className="form-control"
                                   name="availablestart"

                                   required=""/>
                        </div>
                    </div>
                    <div className="text-primary">
                        <h4>What Shifts Are You Available To Work?</h4>
                    </div>
                    <div>
                        {/*<table style="width: 100%; text-align: center;">*/}
                        <table>
                            <tbody>
                            <tr>
                                {/*<th style="width: 100px;"></th>*/}
                                {/*<th style="text-align: center; min-width: 50px; max-width: 150px;">Mon</th>*/}
                                {/*<th style="text-align: center; min-width: 50px; max-width: 150px;">Tue</th>*/}
                                {/*<th style="text-align: center; min-width: 50px; max-width: 150px;">Wed</th>*/}
                                {/*<th style="text-align: center; min-width: 50px; max-width: 150px;">Thu</th>*/}
                                {/*<th style="text-align: center; min-width: 50px; max-width: 150px;">Fri</th>*/}
                                {/*<th style="text-align: center; min-width: 50px; max-width: 150px;">Sat</th>*/}
                                {/*<th style="text-align: center; min-width: 50px; max-width: 150px;">Sun</th>*/}
                                <th>Mon</th>
                                <th>Tue</th>
                                <th>Wed</th>
                                <th>Thu</th>
                                <th>Fri</th>
                                <th>Sat</th>
                            </tr>
                            <tr>
                                {/*<td style="font-weight: 700;">Morning</td>*/}
                                <td>Morning</td>
                                <td>
                                    <div data-id="morning|1">
                                    </div>
                                </td>
                                <td>
                                    <div data-id="morning|2">
                                    </div>
                                </td>
                                <td>
                                    <div data-id="morning|3">
                                    </div>
                                </td>
                                <td>
                                    <div data-id="morning|4">
                                    </div>
                                </td>
                                <td>
                                    <div data-id="morning|5">
                                    </div>
                                </td>
                                <td>
                                    <div data-id="morning|6">
                                    </div>
                                </td>
                                <td>
                                    <div data-id="morning|7">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Day</td>
                                <td>
                                    <div data-id="day|1">
                                    </div>
                                </td>
                                <td>
                                    <div data-id="day|2">
                                    </div>
                                </td>
                                <td>
                                    <div data-id="day|3">
                                    </div>
                                </td>
                                <td>
                                    <div data-id="day|4">
                                    </div>
                                </td>
                                <td>
                                    <div data-id="day|5">
                                    </div>
                                </td>
                                <td>
                                    <div data-id="day|6">
                                    </div>
                                </td>
                                <td>
                                    <div data-id="day|7">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Evening</td>
                                <td>
                                    <div data-id="evening|1">
                                    </div>
                                </td>
                                <td>
                                    <div data-id="evening|2">
                                    </div>
                                </td>
                                <td>
                                    <div data-id="evening|3">
                                    </div>
                                </td>
                                <td>
                                    <div data-id="evening|4">
                                    </div>
                                </td>
                                <td>
                                    <div data-id="evening|5">
                                    </div>
                                </td>
                                <td>
                                    <div data-id="evening|6">
                                    </div>
                                </td>
                                <td>
                                    <div data-id="evening|7">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Overnight</td>
                                <td>
                                    <div data-id="overnight|1">
                                    </div>
                                </td>
                                <td>
                                    <div data-id="overnight|2">
                                    </div>
                                </td>
                                <td>
                                    <div data-id="overnight|3">
                                    </div>
                                </td>
                                <td>
                                    <div data-id="overnight|4">
                                    </div>
                                </td>
                                <td>
                                    <div data-id="overnight|5">
                                    </div>
                                </td>
                                <td>
                                    <div data-id="overnight|6">
                                    </div>
                                </td>
                                <td>
                                    <div data-id="overnight|7">
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div>
                            <span>* Click on the time blocks to change your availability</span>
                            <div>Available</div>
                            <div>Unavailable</div>
                        </div>
                    </div>
                    <input type="hidden" name="availability" value="{}"/>
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="form-group"><label className="control-label">Please tell us any other
                                    scheduling or availability considerations, ie: school, children,
                                    etc.</label><textarea className="form-control" name="schedulenotes"
                                                          placeholder="Other Scheduling/Availability Information">
                                </textarea>
                                </div>
                            </div>
                        </div>
                </div>
            </form>
        </div>
    );
};

export default Employment;
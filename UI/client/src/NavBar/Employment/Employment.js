import React from 'react';

const Employment = () => {
    return (
        <div>
            <h1>Job Application</h1>
            <form>
                <h3>Personal Information</h3>
                    <div>
                        <div>
                            <input type="text"
                                   name="firstname"
                                   placeholder="First Name"
                                   required=""/>
                        </div>
                        <div>
                            <input type="text"
                                   name="lastname"
                                   placeholder="Last Name"
                                   required=""/>
                        </div>
                    </div><br/>
                <div>
                    <input type="text"
                           name="address" 
                           placeholder="Address"
                           required=""/>
                </div>
                <div>
                    <input type="text"
                           name="city"
                           placeholder="City"
                           required=""/>
                </div>
                <div>
                    <input type="text"
                           name="state"
                           placeholder="State"
                           required="" maxLength="2"/>
                </div>
                <div>
                    <input type="text"
                           name="zip"
                           placeholder="Zip"
                           required=""
                           maxLength="5"/>
                </div><br/>
                <div>
                    <input type="tel"
                           name="phone"
                           placeholder="Phone"
                           data-format="(999) 999-9999"
                           required=""/>
                </div>
                <div>
                    <input type="tel"
                           name="alternate"
                           placeholder="Alternate Phone"
                           data-format="(999) 999-9999"/>
                </div>
                <div>
                    <input type="email"
                           name="email"
                           placeholder="Email Address"
                           required=""/>
                </div><br/>
                <div>
                    <label>
                        Date of Birth
                    </label><br/>
                    <input type="date"
                           name="dob"
                           max="2005-12-31"
                           required=""/>
                </div><br/>
                <div>
                    <h3>Availability Information</h3>
                        <div>
                            <div>
                                <div>
                                    <input type="radio"
                                            name="available"/>
                                Available Full Time (28 or more hrs per week)
                                </div>
                                <div>
                                 <input type="radio"
                                        name="available"/>
                                Available Part Time (less than 28 hrs per week)
                                </div><br/>
                            </div>
                        </div>
                            <div>
                                <h5>When can you be available to start working?</h5>
                                    <div>
                                        <input type="date"
                                                name="availablestart"
                                                required=""/>
                                    </div><br/>
                            </div>
                                <h4>What Days Are You Available To Work?</h4>
                                    <div>
                                    <input type="checkbox"
                                            name="Monday"/>
                                            Monday
                                    </div>
                                    <div>
                                    <input type="checkbox"
                                            name="Tuesday"/>
                                            Tuesday
                                    </div>
                                    <div>
                                    <input type="checkbox"
                                            name="Wednesday"/>
                                            Wednesday
                                    </div>
                                    <div>
                                    <input type="checkbox"
                                            name="Thursday"/>
                                            Thursday
                                    </div>
                                    <div>
                                    <input type="checkbox"
                                            name="Friday"/>
                                            Friday
                                    </div>
                                    <div>
                                    <input type="checkbox"
                                            name="Saturday"/>
                                            Saturday
                                    </div><br/>
                                <h4>What Shift(s) Are You Available To Work?</h4>
                                <div>
                                    <input type="checkbox"
                                            name="Morning"/>
                                            Morning
                                    </div><div>
                                    <input type="checkbox"
                                            name="Afternoon"/>
                                            Afternoon
                                    </div><div>
                                    <input type="checkbox"
                                            name="Evening"/>
                                            Evening
                                    </div><br/>
                                <div>
                                    <label>
                                        Please tell us any other scheduling or availability considerations, ie: school, children, etc.
                                    </label><br/><br/>
                                    <textarea rows="10" cols="50" name="schedulenotes"
                                            placeholder="Other Scheduling/Availability Information">
                                    </textarea>
                                </div>
                </div>
                    <div>
                        <input type="Submit"/>
                    </div>
            </form>
        </div>
    );
};

export default Employment;
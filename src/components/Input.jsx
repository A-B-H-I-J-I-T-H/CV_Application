/* eslint-disable react/prop-types */
function Input ({handleChange,handleInputChange,data}) {
    return (
        <div className="right mid">
            <div className="generalInfo container1">
                <p> General Info </p>
                <div className="container2">
                    <div className="container3">
                        <label htmlFor="Name">NAME</label>
                        <input type="text" name="Name" id="Name" value={data.Name} onChange={handleInputChange}/>
                    </div>
                    <div className="container3">
                        <label htmlFor="email">EMAIL</label>
                        <input type="email" name="email" id="email" value={data.email} onChange={handleInputChange} />
                    </div>
                    <div className="container3">
                        <label htmlFor="phone">PHONE NO</label>
                        <input type="number" name="phone" id="phone" value={data.phone} onChange={handleInputChange} />
                    </div>
                </div>
            </div>
            <div className="education container1"><p>Education</p>
                <div className="container2">
                    <div className="container3">
                        <label htmlFor="school">SCHOOL NAME</label>
                        <input type="text" name="school" id="school" value={data.school} onChange={handleInputChange} />
                    </div>
                    <div className="container3">
                        <label htmlFor="subject">TITLE OF STUDY</label>
                        <input type="text" name="subject" id="subject" value={data.subject} onChange={handleInputChange} />
                    </div>
                    <div className="conatiner3">
                        <label htmlFor="date">DATE OF STUDY</label>
                        <input type="date" name="date" id="date" value={data.date} onChange={handleInputChange} />
                    </div>
                </div>
            </div>
            <div className="experience container1"><p>Experience</p>
                <div className="container2">
                    <div className="container3">
                        <label htmlFor="company">COMPANY NAME</label>
                        <input type="text" name="company" id="company" value={data.company} onChange={handleInputChange} />
                    </div>
                    <div className="container3">
                        <label htmlFor="position">POSITION TITLE</label>
                        <input type="text" name="position" id="position" value={data.position} onChange={handleInputChange} />
                    </div>
                    <div className="container3">
                        <label htmlFor="responsiblity">MAIN RESPONSIBILITIES</label>
                        <textarea name="responsibility" id="responsibility" cols="30" rows="10" value={data.responsibility} onChange={handleInputChange}></textarea>
                    </div>
                    <div className="container3">
                        <div className="one">
                            <label htmlFor="sdate">STARTING DATE</label>
                            <input type="date" name="sdate" id="sdate" value={data.sdate} onChange={handleInputChange} />
                        </div>
                        <div className="one">
                            <label htmlFor="edate">ENDING DATE</label>
                            <input type="date" name="edate" id="edate" value={data.edate} onChange={handleInputChange} />
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => handleChange()}>SUBMIT</button>
        </div>
    )
}

export default Input;
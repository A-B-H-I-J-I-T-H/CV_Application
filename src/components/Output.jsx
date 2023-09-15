/* eslint-disable react/prop-types */
function Output({handleChange,data}) {
    return (
        <div className="right mid">
            <p>General Info</p>
            <div>NAME : {data.Name}</div>
            <div>EMAIL : {data.email}</div>
            <div>PHONE NO : {data.phone}</div>
            <br />
            <p>Education</p>
            <div>SCHOOL NAME : {data.school}</div>
            <div>TITLE OF STUDY : {data.subject}</div>
            <div>DATE OF STUDY : {data.date}</div>
            <br />
            <p>Experience</p>
            <div>COMPANY NAME : {data.company}</div>
            <div>POSITION TITLE : {data.position}</div>
            <div>MAIN RESPONSIBILITIES : {data.responsibility}</div>
            <div>STARTING DATE : {data.sdate}</div>
            <div>ENDING DATE : {data.edate}</div>
            <button onClick={() => handleChange()}>EDIT</button>
        </div>
    );
}

export default Output;
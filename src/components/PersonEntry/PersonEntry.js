import React from 'react'
import './PersonEntry.css'
const PersonEntry = () => {
  return (
    <>
      <form action="#" method="post">
        <label htmlFor="purpose">Purpose:</label>
        <input type="text" id="purpose" name="purpose" required="" />
        <label htmlFor="fullname">Full Name:</label>
        <input type="text" id="fullname" name="fullname" required="" />
        <label htmlFor="fathername">Father's Name:</label>
        <input type="text" id="fathername" name="fathername" required="" />
        <label htmlFor="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob" required="" />
        <label htmlFor="aadhar">Aadhar Number:</label>
        <input type="text" id="aadhar" name="aadhar" required="" />
        <label htmlFor="file1">File 1:</label>
        <input type="file" id="file1" name="file1" />
        <label htmlFor="file2">File 2:</label>
        <input type="file" id="file2" name="file2" />
        <label htmlFor="file3">File 3:</label>
        <input type="file" id="file3" name="file3" />
        <label htmlFor="mobile">Mobile Number:</label>
        <input type="tel" id="mobile" name="mobile" required="" />
        <label htmlFor="email">Email ID:</label>
        <input type="email" id="email" name="email" required="" />
        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          rows={4}
          required=""
          defaultValue={""}
        />
        <label htmlFor="fingerprint">Fingerprint:</label>
        <input type="text" id="fingerprint" name="fingerprint" required="" />
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
        <button type="button" onclick="location.reload()">
          New Entry
        </button>
      </form>
    </>
  );
}

export default PersonEntry
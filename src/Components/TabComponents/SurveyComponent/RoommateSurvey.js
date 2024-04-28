import React, { useState } from 'react';
import './RoommateSurvey.css';

// Initialize Roommate Profile Variables
const RoommateSurvey = () => {
    const [responses, setResponses] = useState({
        Smoking: '',
        WakeUpTime: '',
        SleepTime: '',
        Cleanliness: '',
        OvernightGuests: '',
        NoiseLevels: '',
        GoingOut: '',
        TemperaturePreference: '',
        TimeNeededAlone: '',
        AlarmReliance: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setResponses({
            ...responses,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Survey responses:', responses);
    };

    // Helper function to generate options for select dropdowns, with optional open-ended (+) value
    const generateOptions = (start, end, includeOpenEnded = false, isTime = false) => {
        let options = [];
        const step = start > end ? -1 : 1;  // Determine the stepping direction based on start and end values
        for (let i = start; (step === 1 ? i <= end : i >= end); i += step) {
            if (isTime) { // If generating time options, format the hours
                const hour = i % 24;
                const isPM = hour >= 12; // Check if it's PM
                const displayHour = hour % 12 === 0 ? 12 : hour % 12; // Convert 0 to 12 for 12 AM and 12 PM
                const formattedTime = `${displayHour < 10 ? '0' + displayHour : displayHour}:00 ${isPM ? 'PM' : 'AM'}`;
                options.push(<option key={formattedTime} value={i}>{formattedTime}</option>);
            } else {
                options.push(<option key={i} value={i}>{i}</option>);
            }
        }
        if (includeOpenEnded) {
            options.push(<option key={end + '+'} value={`${end}+`}>{`${end+1}+`}</option>);
        }
        return options;
    };    

    return (
        <form className="surveyForm" onSubmit={handleSubmit}>
            <div className="questionContainer">
                <label className="formLabel">How often do you smoke?</label>
                {generateOptions(0, 5).map(option => (
                    <label className="formLabelExtra" key={option.key}>
                        <input
                            type="radio"
                            name="Smoking"
                            className="inputContainer"
                            value={option.props.value}
                            checked={responses.Smoking === option.props.value.toString()}
                            onChange={handleChange}
                        /> {option.props.value} - {['Never', 'Rarely', 'Occasionally', 'Frequently', 'Very Often', 'Always'][option.props.value]}
                    </label>
                ))}
            </div>
            <div className="questionContainer">
                <label className="formLabel">What time do you normally wake up?</label>
                <select className="selectContainer" name="WakeUpTime" value={responses.WakeUpTime} onChange={handleChange}>
                    {generateOptions(5, 11, false, true)}
                </select>
            </div>
            <div className="questionContainer">
                <label className="formLabel">What time do you normally go to bed?</label>
                <select className="selectContainer" name="SleepTime" value={responses.SleepTime} onChange={handleChange}>
                    {generateOptions(20, 28, false, true)}
                </select>
            </div>
            <div className="questionContainer">
                <label className="formLabel">
                    How clean would you consider yourself?<br />
                    <p className="labelDescription">
                        (0 - Not Clean/Tidy at all; 10 - Extremely Clean/Tidy)
                    </p>
                </label>
                <select className="selectContainer" name="Cleanliness" value={responses.Cleanliness} onChange={handleChange}>
                    {generateOptions(0, 10)}
                </select>
            </div>
            <div className="questionContainer">
                <label className="formLabel">How often are you likely to have overnight guests?</label>
                {generateOptions(0, 5).map(option => (
                    <label className="formLabelExtra" key={option.key}>
                        <input
                            type="radio"
                            name="OvernightGuests"
                            className="inputContainer"
                            value={option.props.value}
                            checked={responses.OvernightGuests === option.props.value.toString()}
                            onChange={handleChange}
                        /> {option.props.value} - {['Never', 'Rarely', 'Occasionally', 'Frequently', 'Very Often', 'Always'][option.props.value]}
                    </label>
                ))}
            </div>
            <div className="questionContainer">
                <label className="formLabel">
                    How noisy do you like having the room?<br />
                    <p className="labelDescription">
                        (0 - Completely Silent, 10 - Extremely Loud & Noisy)
                    </p>
                </label>
                <select className="selectContainer" name="NoiseLevels" value={responses.NoiseLevels} onChange={handleChange}>
                    {generateOptions(0, 10)}
                </select>
            </div>
            <div className="questionContainer">
                <label className="formLabel">What temperature do you like having the room?</label>
                {generateOptions(0, 5).map(option => (
                    <label className="formLabelExtra" key={option.key}>
                        <input
                            type="radio"
                            name="GoingOut"
                            className="inputContainer"
                            value={option.props.value}
                            checked={responses.GoingOut === option.props.value.toString()}
                            onChange={handleChange}
                        /> {option.props.value} - {['Never', 'Rarely', 'Occasionally', 'Frequently', 'Very Often', 'Always'][option.props.value]}
                    </label>
                ))}
            </div>
            <div className="questionContainer">
                <label className="formLabel">What temperature do you like having the room?</label>
                {generateOptions(0, 5).map(option => (
                    <label className="formLabelExtra" key={option.key}>
                        <input
                            type="radio"
                            name="TemperaturePreference"
                            className="inputContainer"
                            value={option.props.value}
                            checked={responses.TemperaturePreference === option.props.value.toString()}
                            onChange={handleChange}
                        /> {option.props.value} - {['Freezing', 'Cold', 'Mild', 'Warm', 'Hot', 'Burning'][option.props.value]}
                    </label>
                ))}
            </div>
            <div className="questionContainer">
                <label className="formLabel">How many hours a day do you need alone?</label>
                <select className="selectContainer" name="TimeNeededAlone" value={responses.TimeNeededAlone} onChange={handleChange}>
                    {generateOptions(0, 11, true)}
                </select>
            </div>
            <div className="questionContainer">
                <label className="formLabel">How often do you use an alarm?</label>
                {generateOptions(0, 5).map(option => (
                    <label className="formLabelExtra" key={option.key}>
                        <input
                            type="radio"
                            name="AlarmReliance"
                            className="inputContainer"
                            value={option.props.value}
                            checked={responses.AlarmReliance === option.props.value.toString()}
                            onChange={handleChange}
                        /> {option.props.value} - {['Never', 'Rarely', 'Occasionally', 'Frequently', 'Very Often', 'Always'][option.props.value]}
                    </label>
                ))}
            </div>
            <button className="surveySubmitButton" type="submit">Submit</button>
        </form>
    );
};

export default RoommateSurvey;
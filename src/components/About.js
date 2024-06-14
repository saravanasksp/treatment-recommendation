import React, { useState } from 'react';

const About = () => {
    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Lisbon"],
            answer: "Paris"
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
            answer: "Harper Lee"
        },
        // Add more questions as needed
    ];

    const [responses, setResponses] = useState(Array(questions.length).fill(null));
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (questionIndex, option) => {
        const newResponses = [...responses];
        newResponses[questionIndex] = option;
        setResponses(newResponses);
    };

    const handleSubmit = () => {
        setSubmitted(true);
    };

    return (
        <div>
            <h1>Questionnaire</h1>
            {questions.map((q, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                    <h3>{q.question}</h3>
                    {q.options.map((option, optionIndex) => (
                        <div key={optionIndex}>
                            <input
                                type="radio"
                                id={`q${index}_option${optionIndex}`}
                                name={`question${index}`}
                                value={option}
                                checked={responses[index] === option}
                                onChange={() => handleChange(index, option)}
                                disabled={submitted}
                            />
                            <label htmlFor={`q${index}_option${optionIndex}`}>{option}</label>
                        </div>
                    ))}
                </div>
            ))}
            {!submitted && <button onClick={handleSubmit}>Submit</button>}
            {submitted && (
                <div>
                    <h2>Results</h2>
                    {questions.map((q, index) => (
                        <div key={index} style={{ marginBottom: '20px' }}>
                            <h3>{q.question}</h3>
                            <p>
                                Your answer: {responses[index]} <br />
                                Correct answer: {q.answer} <br />
                                {responses[index] === q.answer ? (
                                    <span style={{ color: 'green' }}>Correct</span>
                                ) : (
                                    <span style={{ color: 'red' }}>Incorrect</span>
                                )}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default About;

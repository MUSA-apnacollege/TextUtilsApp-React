import React, { useState } from 'react';

export default function About() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const myStyle = {
        color: isDarkMode ? 'white' : '#042743',
        backgroundColor: isDarkMode ? '#042743' : 'white',
        border: isDarkMode ? '1px solid white' : '1px solid #042743'
    };

    const containerStyle = {
        color: isDarkMode ? 'white' : '#042743',
        backgroundColor: isDarkMode ? '#13466e' : 'white',
        padding: '20px',
        borderRadius: '8px'
    };

    const toggleStyle = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className="container" style={containerStyle}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or reading time estimation.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <button 
                    onClick={toggleStyle} 
                    type="button" 
                    className={`btn btn-${isDarkMode ? 'light' : 'dark'}`}
                >
                    {isDarkMode ? 'Enable Light Mode' : 'Enable Dark Mode'}
                </button>
            </div>
        </div>
    );
}
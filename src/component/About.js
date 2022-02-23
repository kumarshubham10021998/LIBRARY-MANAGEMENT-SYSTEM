import React, { useState } from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom/cjs/react-dom.development'

export default function About() {
    const [mystyle, setMystyle] = useState({
        color: 'white',
        backgroundColor: 'black'

    })
    const [Btntext, setbtntext] = useState('Enable dark mode')
    const togglestyle = () => {
        if (mystyle.color === 'white') {
            setMystyle({
                color: 'black',
                backgroundColor: 'white'

            })
            setbtntext("Enable light mode");
        } else {
            setMystyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setbtntext("Enable dark mode");
        }

    }
    return (

        <div className="container" style={mystyle}>
            <h2 className='my-2'>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                            Text processing
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong> This article is about Computer processing.</strong> For mental processing, see Reading comprehension. For language processing by computers, see Natural language processing.
                            P.Oxy.6.993 text transcribed.svg
                            In computing, the term text processing refers to the theory and practice of automating the creation or manipulation of electronic text. Text usually refers to all the alphanumeric characters specified on the keyboard of the person engaging the practice, but in general text means the abstraction layer immediately above the standard character encoding of the target text. The term processing refers to automated (or mechanized) processing, as opposed to the same manipulation done manually. <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Contents
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong>Text processing involves computer commands which invoke content.</strong> Text processing involves computer commands which invoke content, content changes, and cursor movement, for example to

                            search and replace
                            format
                            generate a processed report of the content of, or
                            filter a file or report of a text file.
                            The text processing of a regular expression is a virtual editing machine, having a primitive programming language that has named registers (identifiers), and named positions in the sequence of characters comprising the text. Using these, the "text processor" can, for example, mark a region of text, and then move it. The text processing of a utility is a filter program, or filter. These two mechanisms comprise text processing.<code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Definition
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong>This is the third item's accordion body.</strong> Since the standardized markup such as ANSI escape codes are generally invisible to the editor, they comprise a set of transitory properties that become at times indistinguishable from word processing. But the definite distinctions from word processing are that text processing proper:

                            represents "text processing utilities", not just "text editing" applications.
                            is much more "the keyboard way", as opposed to "the mouse way" (e.g. drag and drop, cut and paste) of initiating an edit.
                            is sequential access rather than random access in approach.
                            operates directly at the presentation layer rather than indirectly at the application layer.
                            works raw data that is standardized and works more openly rather than tending towards any proprietary methods.
                            In this way markup such as font and color are not really a distinguishing factor, because the character sequences that affect font and color are simply standard characters inserted automatically by a background text processing mode, made to work transparently by compliant text editors, yet becoming otherwise visible as text processing commands when that mode is not in effect. So text processing is defined most basically (but not entirely) around the visual characters (or graphemes) rather than the standard, yet invisible characters. <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div className="conatiner my-3">
                <button className="btn btn-primary" onClick={togglestyle} type='button'>{Btntext}</button>
            </div>

        </div>
    )
}

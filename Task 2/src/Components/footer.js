import React from "react"
import './footer.css'

export default function footer() {
    return (
        <>
            <footer>
            <p id="p1">Created by <span id="credit"> Vanshita Mathur</span></p>
                <p className="social">
                    <a target="_blank" href="https://www.linkedin.com/in/vanshita-mathur-04a558224b">
                        LinkedIn </a>|
                    <a target="_blank" href="https://github.com/Vanshiii203">
                        GitHub
                    </a>|
                    <a target="_blank" href="https://www.instagram.com/vanshita_mathur23/">
                        Instagram
                    </a>|
                    <a target="_blank" href="mailto:vanshitamathur2307@gmail.com">
                        Email
                    </a>
                </p>
            </footer>
        </>
    )
}
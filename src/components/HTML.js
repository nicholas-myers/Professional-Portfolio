import React from "react"

function HTML() {
    return (
        <article>
            <div style={{display: "flex", alignItems: 'center', padding: '2rem'}}>
                <p style={{textAlign: 'left', }}>The approach I take when first building a site using HTML is to draw out on paper or an online tool such as Whimsical the layout of the site. The three things I always start with are a header, content section, and footer. I make sure to remember that everything is a box, and to label what element each box is.</p>
                <img style={{border: '1px solid #5A86AF', borderRadius: '1rem'}} width="48%" src={require("../img/basicwireframe.png")} alt="basic wireframe" />
            </div>
          </article>
    )
}

export default HTML;
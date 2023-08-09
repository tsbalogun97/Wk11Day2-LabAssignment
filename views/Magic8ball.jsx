import React from 'react'

function Magic8ball(props) {
  let response = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
  let text = response[ Math.floor(Math.random() * 21)]
  return (
    <div>
      <p>
        <h2>{props.question}</h2>
      </p>
      <p>
        <h2>{text}</h2>
      </p>
    </div>
  )
}

export default Magic8ball
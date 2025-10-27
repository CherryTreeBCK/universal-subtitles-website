import * as React from 'react'

const faq = {
  title: 'Help Section',
  items: [
    {
      q: 'My subtitles are not updating. What should I do?',
      a: (
        <>
          Check if your speakers are powered on. The program cannot detect audio if no output device is connected.
        </>
      ),
    },
    {
      q: 'How can I view the transcription log?',
      a: "All transcriptions are logged in the terminal window that opens alongside the program.",
    },
    {
      q: 'What are the controls?',
      a: 'To open the settings menu, right click the overlay. The default controls are F9 to show the overlay and F10 to hide it.',
    },
    {
      q: 'What should I do if I find a bug or have a feature request?',
      a: 'Please reach out to me on Discord: cherrytree42.',
    },
  ],
}

export default faq

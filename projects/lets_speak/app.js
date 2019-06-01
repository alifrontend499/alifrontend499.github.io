const button = document.querySelector('.talk');
const content = document.querySelector('.content');
if (button !== null && content !== null) {
    try {
        const speechReco = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new speechReco();
        recognition.onstart = () => {
            console.log("Voice is exicuted");
        }
        recognition.onresult = (event) => {
            content.innerText = "I got you.";
            const recordedVoice = event.resultIndex;
            const transcript = event.results[recordedVoice][0].transcript;
            console.log(transcript);
            readOutLoud(transcript);
        }
        button.addEventListener('click', () => {
            content.innerText = "I'm listening...";
            recognition.start();
        });

        function readOutLoud(message) {
            const speach = new SpeechSynthesisUtterance();
            speach.text = "";
            speach.volume = 1;
            speach.rate = 1.2;
            speach.pitch = 1;

            if (message == "hello how are you") {
                speach.text = "i'm good. how are you ali!";
            } else if (message == "do you know me") {
                speach.text = "Yes you are Ali, Front end developer.";
            } else if (message == "do you know didi") {
                speach.text = "Yes i know her. she was SEO";
            } else {
                speach.text = "I don't know what to say.";
            }

            window.speechSynthesis.speak(speach);
        }

    } catch (error) {
        console.log(err);
    }
}
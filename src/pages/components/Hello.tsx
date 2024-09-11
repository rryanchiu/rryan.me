import {TypeAnimation} from 'react-type-animation';

const Hello = () => {
    const MySequence = [
        200,
        'Hi👋👋\n' +
        'I\'m Ryan\n' +
        'Full Stack Developer\n' +
        'Currently exploring new opportunities' +
        'and working on personal projects.'
    ]
    return (
        <>
            <TypeAnimation
                sequence={MySequence}
                wrapper="span"
                cursor={true}
                repeat={0}
                style={{
                    minHeight: '200px',
                    fontWeight: 'bold',
                    fontSize: '2em',
                    whiteSpace: 'pre-line',
                    display: 'block'
                }}
            />

        </>
    )
}
export default Hello
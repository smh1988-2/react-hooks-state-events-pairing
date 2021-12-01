function Buttons({ handleUpVotes, handleDownVotes, upVotes, downVotes }) {
    return (
        <>
            <button onClick={handleUpVotes}>{upVotes} 👍</button>
            <button onClick={handleDownVotes}>{downVotes} 👎</button>
        </>
    );
}

export default Buttons;
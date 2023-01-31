const Total = (props) => {
    const totalExercises = props.chapters.map(chapter => chapter.exercises).reduce((a,b) => a+b);
    return (
        <div>
            <p>Number of exercises {totalExercises}</p>
        </div>
    )
}

export default Total;
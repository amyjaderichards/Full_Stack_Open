const Part = (props) => {
    return (
        <div>
            <p>
                {props.chapterName} {props.numberOfExercises}
            </p>
        </div>
    )

};

export default Part;
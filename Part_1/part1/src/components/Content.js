import Part from './Part';

const Content = (props) => {
    const chapterNames = props.chapterName;
    const numberOfExercises = props.numberOfExercises;
    return (
        <div>
            <Part chapterName={chapterNames[0]} numberOfExercises={numberOfExercises[0]}/>
            <Part chapterName={chapterNames[1]} numberOfExercises={numberOfExercises[1]}/>
            <Part chapterName={chapterNames[2]} numberOfExercises={numberOfExercises[2]}/>
        </div>
    )
}

export default Content;
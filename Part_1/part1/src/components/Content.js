import Part from './Part';

const Content = (props) => {
    const chapterNames = props.chapters.map(chapter => chapter.name);
    const numberOfExercises = props.chapters.map(chapter => chapter.exercises);

    return (
        <div>
            <Part chapter={chapterNames[0]} exercises={numberOfExercises[0]}/>
            <Part chapter={chapterNames[1]} exercises={numberOfExercises[1]}/>
            <Part chapter={chapterNames[2]} exercises={numberOfExercises[2]}/>
        </div>
    )
}

export default Content;
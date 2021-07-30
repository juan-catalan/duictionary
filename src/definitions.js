const Img = (props) => {
  if (props.img === null) {
    return null
  } else {
    return (
      <img className='w-full' src={props.img} alt={props.alt} />
    )
  }
}

const grid = (length) => {
  if (length >= 3) {
    return 'lg:grid grid-cols-3 gap-4'
  } else if (length === 2) {
    return 'lg:grid grid-cols-2 gap-4'
  } else return null
}

const Card = (props) => {
  const cards = props.definitions.map((element) => {
    return (
      <div key={element.definition} className='mr-8 mt-10 mb-14 bg-white rounded-t-lg rounded-b-lg overflow-hidden border-t border-l border-r border-b border-gray-400 dark:border-transparent p-10 flex justify-center dark:bg-gray-800'>
        <div className='max-w-sm rounded overflow-hidden border border-gray-200 shadow-lg dark:border-transparent dark:rounded dark:bg-gray-700 dark:text-white'>
          <Img img={element.image_url} alt={element.definition} />
          <div className='px-6 py-4'>
            <i className='font-body text-xl mb-2'>{element.type}</i>
            <br />
            <p className='font-body mt-4 text-base'>
              {element.definition}
            </p>
            <p className='font-body mt-4 text-base'>
              <i>
                {element.example}
              </i>
            </p>
            <p className='mt-4 text-xl'>
              {element.emoji}
            </p>
          </div>
        </div>
      </div>
    )
  })

  return (
    cards
  )
}

const Definitions = (props) => {
  if (props.result.word === undefined) {
    return null
  }

  return (
    <div className='ml-8 text-5xl'>
      <b className='font-title dark:text-white'>
        {props.result.word}
      </b>
      <i className='font-body text-base dark:text-white pb-8'>
        {props.result.pronunciation}
      </i>
      <br />
      <div className={`${grid(props.result.definitions.length)}`}>
        <Card definitions={props.result.definitions} />
      </div>
    </div>
  )
}

/*
  Example respones:
  { definitions:
   [ { type: 'noun',
       definition:
        'a nocturnal bird of prey with large eyes, a facial disc, a hooked beak, and typically a loud hooting call.',
       example:
        'I love reaching out into that absolute silence, when you can hear the owl or the wind.',
       image_url:
        'https://media.owlbot.info/dictionary/images/owl.jpg.400x400_q85_box-403,83,960,640_crop_detail.jpg',
       emoji: '🦉' } ],
  word: 'owl',
  pronunciation: 'oul' }
*/

export default Definitions

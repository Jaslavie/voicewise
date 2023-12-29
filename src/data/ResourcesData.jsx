// data for all the resources contained in the resources page

const resourcesData = {
    "mastery": {
      id: "mastery",
      iconNameType: "Reading",
      h1: "Mastery: Robert Greene",
      p: "Become a master in what you were meant to do: A modern philosophical exploration on how to achieve mastery by following what you're naturally good at.",
    //   pillar
      iconName: "Personal",
      selectedTopics : [
        {iconNameTopic: 'Self-Growth'},
        {iconNameTopic: 'Role Models'}
      ],


    //   shown inside resourceInner
      readTime: "1 wk",
      price: "$16",
      pageCount: "207",
      pillarButtons: [
        // each element in the array is defined under "buttonInfo"
        {iconName: 'Career'},
        {iconName: 'Personal'}
      ],
      summary: "Want to get really good at something? Want to discover the secret to pleasure and happiness? This book discusses flow, natural talents, deep focus, powerful passions, and behavioral patterns across masters (da vinci, darwin)",
      sneakItems : [
        {iconNameSneak: 'Lesson', 
         sneakTitle: 'Follow your calling, even when society tells you "no"',
         sneakDescription: 'your natural childhood inclinations and instincts are the best indicators for what you are meant to do. In other words, behavioral patterns unfiltered by societal expectations'
        },
        {iconNameSneak: 'Action', 
         sneakTitle: 'The early keys to mastery: observation and obsession',
         sneakDescription: 'da Vinci and Darwin had one thing in common: both were intensely passionate about something. This translated into nonstop, down-to-the-details observation'
        }
      ],
      link : "https://www.amazon.com/Mastery-Robert-Greene/dp/014312417X/ref=asc_df_014312417X/?tag=hyprod-20&linkCode=df0&hvadid=312403172530&hvpos=&hvnetw=g&hvrand=5395136896528776407&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9031573&hvtargid=pla-437083755995&psc=1&mcid=9d41af9afe893d3fb62e7ba249813fe5&tag=&ref=&adgrpid=60300244057&hvpone=&hvptwo=&hvadid=312403172530&hvpos=&hvnetw=g&hvrand=5395136896528776407&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9031573&hvtargid=pla-437083755995&gclid=EAIaIQobChMIoZ678_uzgwMVaRetBh3QVwapEAQYASABEgLuJfD_BwE",
      coreTopic: "Life philosophy",
      type: "Guided book",
      readElements: [
        {readReason: 'you want to learn a new philosophy'},
        {readReason: 'to master a new skill'}
      ]
    },
    
  };
  
  export default resourcesData;
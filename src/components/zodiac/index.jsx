import "./zodiac.css";
import TextInner from "./../textInner/index";
import { useDispatch } from "react-redux";
import { OPEN_MODAL } from "../../store/constants/modal.const";
import ModalSign from "../../common/modal/ariesSign";

function Zodiac() {
  const imgZodiac = [
    {
      img: "http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/icon-01.png",
      place: "image_1",
      name: "Aquarius",
      symbol: "The water bearer",
      dates: "January 20 – February 17 for 2023",
      element: "Air",
      modality: "Fixed",
      rulingPlanet: "Uranus",
      traits: [
        "Purposefully esoteric",
        "No feelings, just concepts",
        "Actually believes in conspiracy theories",
        "More in love with humanity as a whole than individuals",
        "Always feels like an outcast",
        "Fetishizes personal freedom",
      ],
      famous: "Angela Davis",
      best: "Professional dilettante",
      about: {
        personality:
          "Intelligence, to them, means the ability to formulate the most unpopular opinion possible. If they were white sheep, they’d dye their wool black just to prove a point. They are destined to live their lives in direct opposition to the current world. In fact, they are world-builders. An entire universe exists in their heads, and this universe adheres to its own set of logic that doesn’t map onto reality. They aren't anarchists. They are utopians. They are not cold. They are rational. To them, emotions are just holes in their idealistic vessels. Why succumb to sensitivity when there is so much knowledge to acquire, so many problems to be solved, worlds to invent?",
        weaknesses:
          "Aquarians are always running little tests. They live their lives as one big science experiment, using the element of surprise to collect reactions and construct theories about the intricacies of human nature. They are walking abstract art pieces, shattering traditional perspectives with their complete disregard for convention. They are martyrs to the cause of humanity. Freedom is their only demand.",
      },
    },
    {
      img: "http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/icon-12.png",
      place: "image_2",
      name: "Pisces",
      symbol: "The fishes",
      dates: "February 18 – March 19 for 2023",
      element: "Water",
      modality: "Mutable",
      rulingPlanet: "Neptune",
      traits: [
        "Somehow both 5 and 50 years old at once",
        "Thinks everything is a sign",
        "Can't remember if they dreamt it or it actually happened",
        "Excessively romantic",
        "Prone to fantasy",
        "No boundaries",
      ],
      famous: "Nina Simone",
      best: "Volunteer therapist",
      about: {
        personality:
          "Describing a Pisces’ personality can be difficult because Pisces tend to evade distinction. Their behavior changes significantly based on who they’re around. Pisces are just permeable membranes that pensively let things flow through them. They are cerebral sea sponges. They are boundless, diluting themselves with larger personalities to avoid having to form coherent identities.",
        weaknesses:
          "The true Pisces weakness is that they’re often the cause of their own turmoil. They’re a little bit addicted to melancholy. Pisces want to feel things intensely. Pisces find sorrow's poignance pleasurable. They would rather marinate in a voluptuous pit of despair than have no feelings at all. The search for heart-rending emotional experiences sometimes causes Pisces to seek out situations that are subconsciously self-defeating.",
      },
    },
    {
      img: "http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/icon-11.png",
      place: "image_3",
      name: "Taurus",
      symbol: "The bull",
      dates: "April 20 – May 20 for 2023",
      element: "Earth",
      modality: "Fixed",
      rulingPlanet: "Venus",
      traits: [
        "Just wants to cuddle",
        "Homebody",
        "All or nothing, no in-between",
        "Wears the same outfit everyday",
        "Hates big changes",
      ],
      famous: "Karl Marx",
      best: "Hermit in the woods",
      about: {
        personality:
          "Tauruses are the human equivalent of moss. A handmade wooden chair. They are normally satisfied with the way things are. They embody stability. Sitting in a patch of grass admiring the breeze. When everything else seems to be falling apart, Tauruses are a rock of dependability in an oasis of calm. Practical knowledge and experience is their modus operandi.",
        weaknesses:
          "They can become stubborn and obstinate, and have a hard time listening to other people. They can be like a bull–stuck in the mud, and unable to see the bigger picture. Tauruses are slow to act, and may be too caught up in the moment to see the potential for something bigger. They can also be reckless, especially when they are young. They can struggle with over-indulgence in vices because they don’t know moderation. Once they decide they like something, they go all in.",
      },
    },
    {
      img: "http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/icon-10.png",
      place: "image_4",
      name: "Aries",
      symbol: "The ram",
      dates: "March 20 – April 19 for 2023",
      element: "Fire",
      modality: "Cardinal",
      rulingPlanet: "Mars",
      traits: [
        "No filter",
        "Gets angry, then forgets why they were angry",
        "Thinks everything is a game they can win",
        "Will do anything on a dare",
        "Easily bored ",
      ],
      famous: "Mariah Carey",
      best: "Stunt double",
      about: {
        personality:
          "Aries are driven by a desire to prove themselves and their strength. They have high energy, and are competitive and ambitious. They naturally take charge because they are good at initiating new projects. They can also be impatient, but are naturally active and don’t like to waste time. While Aries like competition, they don’t like to play games. They are highly self-aware, have strong opinions and are always ready to defend them.",
        weaknesses:
          "All Aries want to feel things intensely. This is one of their most commendable qualities, but also what causes them a great deal of pain and grief. Aries tend to be impulsive, impatient, and hotheaded. They are often reacting out of emotion rather than from a place of calm clear-headedness. They do not apologize for their anger. They say “I don’t care” and mean it. They don’t always have the best self-control.",
      },
    },
    {
      img: "http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/icon-09.png",
      place: "image_5",
      name: "Gemini",
      symbol: "The twins",
      dates: "May 21 – June 20 for 2023",
      element: "Air",
      modality: "Mutable",
      rulingPlanet: "Mercury",
      traits: [
        "Charismatic",
        "Uses humor as a crutch",
        "Could talk to a brick wall",
        "Arguments as flirting",
        "Knows a little about everything",
      ],
      famous: "Laverne Cox",
      best: "Likable politician",
      about: {
        personality:
          "Geminis have an uncanny ability to size up a person’s character in a matter of seconds, even if they only just met them. If someone’s bluffing, they’ll be the first to notice. They are great communicators because they tend to be very responsive and sensitive listeners. Geminis are versatile, comfortable being both introverts and extroverts. They are quick to adapt to the energy of a room–they can be the life of the party or a complete wallflower. Geminis know how to bring dissimilar people together and make them get along.",
        weaknesses:
          "Geminis aren't in a rush to get anywhere, they’re just looking for something new. The most important thing Geminis need to realize is that there is no final destination to be found at the end of the road. They can’t run forever. At some point they’re going to have to stop and look around. To take responsibility for the environment they find themselves in. They’re going to have to look at the world that they’ve built for themselves and decide if it’s really what they want.",
      },
    },
    {
      img: "http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/icon-07.png",
      place: "image_6",
      name: "Cancer",
      symbol: "The crab",
      dates: "June 21 – July 21 for 2023",
      element: "Water",
      modality: "Cardinal",
      rulingPlanet: "The Moon",
      traits: [
        "Sensitive",
        "Seeks comfort",
        "Forgives but never forgets",
        "Only has one boundary, but it is very firm",
        "Takes on other people's problems",
      ],
      famous: "Ariana Grande",
      best: "Emotional packmule",
      about: {
        personality:
          "Cancers are weighed down by their own sorrows and the sorrows of those around them. They are frequently haunted by grief. It’s hard for them to share their pain with others, and they are often afraid to be vulnerable because they carry a fear that people will use their weaknesses against them. Cancers have learned to hide their pain to avoid burdening anyone else. They pretend they’re okay when they’re not.",
        weaknesses:
          "Cancers are homebodies. Drawn to stability, routine, and the comfort of the familiar, they don't like change. Cancers like to know what is expected. They tend to be less experimental than others. Traditions and the past captivate their imaginations. They love art that reminds them of a different time, old stories and art forms. Predictable environments make them feel comfortable. They like to know what’s going to happen. They like to feel that they’re part of a bigger plan. They don’t like surprises.",
      },
    },
    {
      img: "http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/icon-08.png",
      place: "image_7",
      name: "Leo",
      symbol: "The lion",
      dates: "July 22 – August 22 for 2023",
      element: "Fire",
      modality: "Fixed",
      rulingPlanet: "The Sun",
      traits: [
        "Exudes warmth and creativity",
        "A little bit vain",
        "Really big personality",
        "Wants to stand out",
        "Interested in luxury",
      ],
      famous: "Usain Bolt",
      best: "Chanteuse",
      about: {
        personality:
          "Leos are bold, warm, and loving. They are also the ultimate performers. They can dazzle with the theatrical flair of a Broadway star and the charisma of a politician. They are captivating personalities. No matter how quickly they’ve just been introduced to a topic, they can speak eloquently about almost anything because they have such a way with words.",
        weaknesses:
          "A Leo's bad sides appear when their admirable character traits cross over into excess. They can be perceived as overbearing, but this is due to their hyper-presence and warmth. Leos have a reputation for bragging a lot. They see bragging as sharing. Sharing their accomplishments with others makes Leos feel connected, and they expect the same in return from their friends. They want to be celebrated, but they are equally happy to celebrate you.",
      },
    },
    {
      img: "http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/icon-06.png",
      place: "image_8",
      name: "Virgo",
      symbol: "The virgin",
      dates: "August 23 – September 22 for 2023",
      element: "Earth",
      modality: "Mutable",
      rulingPlanet: "Mercury",
      traits: [
        "Needs to feel useful",
        "Has a quick fix for everything",
        "Judgmental, but with good intentions",
        "Exceptional spatial awareness",
        "A million ideas per second",
      ],
      famous: "Fred Hampton",
      best: "Tupperware for other people's messes",
      about: {
        personality:
          "Virgos are also known for being intelligent, but because of their introverted nature they can sometimes have trouble expressing themselves. Talking to them may feel like floating on the surface of existence, and like you never know what they’re thinking and feeling deep inside. Their emphasis on thoughts and ideas can seem like a cover-up for their lack of emotional depth. In reality, they are a fortress unto themselves—the definition of self-containment. Virgos will be endlessly accepting of whatever you have to share, but may not see the value in spontaneously performing a similar excavation of themselves for anyone else.",
        weaknesses:
          "Virgos actively seek out messes of all kinds–physical, interpersonal, emotional.They like working on busy little behind-the-scenes tasks that make life run more smoothly for everyone. Virgos need to keep going at full speed, because if they slow down, the unfolding chaos of the world catches up with them and fills their heads with constant anxiety. It’s this internal disorder that Virgos are always running from, throwing themselves at the Sisyphean task of being the world’s dustpan.",
      },
    },
    {
      img: "http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/icon-04.png",
      place: "image_9",
      name: "Libra",
      symbol: "The Scales",
      dates: "September 23 – October 22 for 2023",
      element: "Air",
      modality: "Cardinal",
      rulingPlanet: "Venus",
      traits: [
        "Hates being alone",
        "Really good aesthetics",
        "Conflict avoidant",
        "Sees every side",
        "Prone to fantasy",
        "Can't make decisions",
      ],
      famous: "Michel Foucault",
      best: "Hivemind",
      about: {
        personality:
          "Libras are difficult to really understand because they seem so contradictory. They’re simultaneously extroverted and introverted, strategic and spontaneous, focused and intuitive. This variability makes it difficult to pin down their true character. They are an entire constellation of personalities. Libras are different depending on who they're around. This is because they value empathy and want to be receptive. They can be other people’s mirrors. While they have strong opinions about other people, it can take a long time for them to understand themselves.",
        weaknesses:
          "What Libras need to discover is that positivity is its own kind of delusion. Libras are bound by the limitations of their bodies and their minds. They are contained within the boundaries of what their five senses tell them. They are able to understand the flavor of the world, but not the color. They’re not able to interpret the underlying micro-signals that others can. The dark abyss of the unknown is a terrifying place for them, which is why they have to pretend that they know everything. They project an air of omniscience. But in truth, they have no idea what they are talking about.",
      },
    },
    {
      img: "http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/icon-03.png",
      place: "image_10",
      name: "Scorpius",
      symbol: "The scorpion",
      dates: "October 23 – November 21 for 2023",
      element: "Water",
      modality: "Fixed",
      rulingPlanet: "Pluto",
      traits: [
        "Primary emotion is betrayal",
        "Looks cool in a leather jacket",
        "OK with uncomfortable silence",
        "Can't be sure if they're serious or joking",
        "Eyes that look into your soul",
      ],
      famous: "Leonardo DiCaprio",
      best: "Brooding protagonist",
      about: {
        personality:
          "Despite their ability to be popular, there’s something very lonely about Scorpios. They have a ruthless view of the world. Eat or be eaten. Their knowledge of other people’s internal structures gives them an edge over the competition. They know how to play people against each other. Every human interaction is a meeting of opposing powerful forces. A clashing of wants and needs where somebody wins and somebody loses. They are forthcoming and evasive at the same time, depending on what is situationally beneficial. They are blunt, but not without tact. They are intentional about the information they reveal. They’re not liars, they don't spread lies, but they are masters of opening windows on certain truths while concealing others behind heavy curtains.",
        weaknesses:
          "Instead of instilling fear, this acknowledgement of darkness is the whetstone that hones their appreciation for life. Scorpios teeter on the fine edge of the unknowable. Life is more bearable that way. Scorpios do fear vulnerability because they are scared of being known. Darkness can be a hiding place. Pain can be an excuse not to trust. When they open up, it gives other people power over them, and Scorpios need to be in control. Control–over themselves and others–is an illusion to make them feel secure in an otherwise uncertain world.",
      },
    },
    {
      img: "http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/icon-02.png",
      place: "image_11",
      name: "Sagittarius",
      symbol: "The Archer",
      dates: "November 22 – December 20 for 2023",
      element: "Fire",
      modality: "Mutable",
      rulingPlanet: "Jupiter",
      traits: [
        "No indoor voice",
        "Forms opinions off of pure emotion",
        "Obsessed with self-improvement",
        "Wields their truth like a blunt weapon",
        "Friendliest person at the party",
      ],
      famous: "Jean Michel Basquiat",
      best: "Foreign correspondent",
      about: {
        personality:
          "Sagittarians are the ultimate empiricists. They will always choose principles over feelings and will often question who they are. They move from job to job, philosophy to philosophy, belief to belief. They are explorers of the human condition and are unafraid of change. Sagittarians feel like the world is their playground. They love to explore the unknown. At their core, they want to understand how the world works.",
        weaknesses:
          "A Sagittarius is both a warrior and a poet. They hold a firearm in one hand and a book in the other. They encapsulate a relentless drive for freedom. They are one of the most magnanimous and worldly signs in the zodiac. Their boundless optimism is infectious. It can be hard for them to find focus, but once they have their mind set on something they’ll stop at nothing to achieve it. Their ability to overcome insurmountable challenges is testament to their adaptable strength.",
      },
    },
    {
      img: "http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/icon-05.png",
      place: "image_12",
      name: "Capricorn",
      symbol: "The sea goat",
      dates: "December 21 – January 19 for 2023",
      element: "Earth",
      modality: "Cardinal",
      rulingPlanet: "Saturn",
      traits: [
        "Full grown adult since age six",
        "The responsible friend",
        "Motivated by duty",
        "Takes a while to warm up to people",
        "Represses any emotion that gets in the way of success",
      ],
      famous: "Martin Luther King Jr.",
      best: "Elementary school hall monitor",
      about: {
        personality:
          "Capricorns collect responsibility. And they always seem to take it all on. Capricorns need to be the one to fix everything. Responsibility is their natural state. They have a “can do” attitude. Capricorns are both the martyrs and the champions. They are the guardians and the judges. The team captains. The chief of chiefs. The general. The leader. But even as they lead the charge, Capricorns can feel like the loneliest people in the world. They wish to be completely self-sufficient, because they are so scared of depending on others.",
        weaknesses:
          "They are incredibly pragmatic. Capricorns are rule followers with a highly developed moral compass. From a young age, it is impressed upon them that their whole sense of worth and meaning is based on their ability to hunker down and force their way to the finish line. Their drive to succeed is a reflection of their fear of failure. The most stressful time in a Capricorn’s life is when they question their own authority. When a Capricorn is in a position of power, they are most stable. When they’re put in a position where they have to cater to someone else’s agenda, they can become a little unhinged.",
      },
    },
  ];
  const dispatch = useDispatch();
  const onModal = (zodiac) => {
    dispatch({
      type: OPEN_MODAL,
      payload: <ModalSign zodiac={zodiac} />,
    });
  };
  return (
    <div className="with_background">
      <div className="zodiac_row_1 zodiac_row">
        <div className="left column" style={{ float: "left" }}>
          <TextInner
            child="The part of astrology that you’re probably most familiar with is the Sun Sign"
            last="When you say “I am a Pisces”, you are referring to your Sun Sign being in Pisces."
            color="#fff"
          />
        </div>
        <div className="right column">
          <div className="et_pb_module et_pb_text et_pb_text_4  et_pb_text_align_left et_pb_bg_layout_light">
            <div className="et_pb_text_inner">
              <p style={{ color: "#ddd" }}>
                It corresponds to the zodiac sign the Sun appeared to be in
                front of when you are born. Because the Earth completes one
                revolution around the Sun each year, the Sun moves through all
                the Zodiac Sun Signs in the same order every year. For example,
                everyone born right before the Spring Equinox (currently in
                early March) is always a Pisces. *Note that there is an offset
                between Sun Signs in the Tropical and Sidereal zodiacs; we use
                the Tropical zodiac.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="zodiac_row_2 zodiac_row">
        <div className="mode column">
          <div className="image_01">
            <span>
              <img
                src="http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/illustration-01.png"
                alt=""
              />
            </span>
          </div>
          {imgZodiac.map((zodiac, index) => (
            <div className={`${zodiac.place} image_overlay`} key={index}>
              <span
                className="has-box-shadow-overlay"
                onClick={() => onModal(zodiac)}
              >
                <div className="box-shadow-overlay" />
                <img src={zodiac.img} alt="" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Zodiac;

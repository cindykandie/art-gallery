"use client";

import { motion } from "framer-motion";

const parts: { number: string; title: string; paragraphs: string[] }[] = [
  {
    number: "I",
    title: "The Departure",
    paragraphs: [
      "The morning Granad left, there was no ceremony to it.",
      "He pulled on his jacket at the door — the brown one with the missing button that Gwynetha had been meaning to replace for three years — and he kissed her once on the top of her head. Not her mouth. Not her cheek. The top of her head, where she wouldn't see it.",
      '"I\'ll be back before the lamp runs out," he said.',
      "Outside, the sky had gone the color of ash. Somewhere past the tree line, two cities had already gone dark. The radio had stopped broadcasting eleven days ago. Food was still manageable if you knew how to grow it, which Granad didn't, and their neighbor Pell had stopped speaking to anyone in the month since his wife disappeared.",
      '"Don\'t," Gwynetha said.',
      '"Don\'t what?"',
      '"Don\'t say a thing like that and expect me to believe it."',
      "He looked at her then — really looked, the way he almost never did anymore — and something passed across his face. Regret, maybe. Or relief. The two had started looking the same.",
      "The children were still asleep. Mira, who was seven, and Solen, who was four and believed very firmly that danger was something that happened to other families. Granad looked toward the hallway, at their closed doors, and said nothing.",
      "And then he was gone.",
    ],
  },
  {
    number: "II",
    title: "Return",
    paragraphs: [
      "He came back that evening.",
      "Gwynetha was at the stove when she heard the latch. She turned, and there he was — framed in the doorway, jacket still intact, boots still muddy. He looked at her, and she looked at him, and something very small and quiet moved inside her chest.",
      '"That was fast," she said.',
      '"Nothing to find," he said. "Roads are worse."',
      "He sat at the table. He folded his hands. He looked at the lamp in the center of the table — the old oil lamp they'd inherited from her mother — and he watched the flame for a long moment.",
      "Gwynetha set a plate in front of him and he said: Thank you.",
      "Granad had not thanked her for a meal in four years. She knew this precisely because she had stopped counting.",
      "She sat across from him. She watched him eat. He was careful about it. Deliberate. He ate the way a person eats when they are not sure what eating is but they have seen it done and are doing their best.",
      "She did not say anything about it.",
      "She told herself it was the roads. People returned different from roads like that.",
    ],
  },
  {
    number: "III",
    title: "The Small Differences",
    paragraphs: [
      "It was the small things first.",
      "He started waking before her. She would open her eyes to find his side of the bed already cool, and the sound of something gentle coming from the kitchen. He was learning to cook. Badly, at first — the kind of badly that suggested he was approaching it as a problem to be solved rather than a skill to be developed. Too much salt. Undercooked eggs. Once, inexplicably, he made something that tasted almost exactly like something her grandmother used to make, and when she asked him where he'd learned it he just said: I tried.",
      "He began sitting with Mira in the evenings. Not beside her on the couch the way he used to — half-present, mind somewhere else — but across from her, at the small table she used for drawing. He watched her draw. He asked questions. What is that? Why did you give it wings? If it could speak, what would it say?",
      "Mira bloomed under it.",
      "Solen was more cautious. He watched the man who wore his father's face from a careful distance, as children sometimes sense the thing that adults are too tired or too frightened to name. He would approach only when invited, and even then he would stand just outside the edge of the lamplight, watching.",
      "One evening, Gwynetha found a set of toys on the workbench. Small figures, cut from scrap metal and sanded smooth, the edges rounded so they wouldn't cut little hands. A horse. A boat. Something she couldn't identify that Solen later named a sky-dog.",
      "She did not ask how long they had taken to make.",
      "She did not ask many things.",
    ],
  },
  {
    number: "IV",
    title: "The Garden",
    paragraphs: [
      "In the second month, he started a garden.",
      "The soil near their house was poor — clay-heavy, full of stones — and Granad had always said there was no point. You can't grow anything in ground like that. She had tried, years ago, and he had watched her fail with the quiet satisfaction of a man who liked being right.",
      "Now he dug for hours. She watched from the window, her hands wrapped around a cup of tea, watching him turn the earth with a focus that felt almost sacred. He collected stones and laid them in patterns. He found compost in places she hadn't known to look. He planted seeds from a tin she didn't know they had.",
      'When she went out to ask about it, he said: "Things grow where they\'re tended. I think I didn\'t know that before."',
      "I think I didn't know that before.",
      "Granad had never said anything like that. Granad was not a man who admitted to not knowing things.",
      "She stood in the turned earth and looked at him for a long time.",
      '"What are you?" she asked.',
      "Not who. What.",
      "He looked up at her. His eyes — Granad's eyes, the exact dark brown she had fallen in love with at nineteen — held something she couldn't name. Patience, maybe. Or grief. Or the specific tenderness of a thing that knows it is loved contingently.",
      '"I\'m trying," he said.',
      '"That\'s not an answer."',
      '"I know," he said. "But it\'s what I have."',
    ],
  },
  {
    number: "V",
    title: "The Question",
    paragraphs: [
      "She asked him directly in the fifth month.",
      "The children were asleep. Outside, there was the sound of wind through grass — the world contracting around them, all the noise of civilization having slowly gone quiet. Pell's house was dark. The nearest town was three hours by foot and she hadn't been in two months.",
      "She sat across from him with her hands flat on the table and she said:",
      '"Granad didn\'t come back, did he."',
      "The man wearing Granad's face didn't flinch. He had the stillness of something that had already made its peace with this conversation.",
      '"No," he said.',
      "The word landed quietly. Like a stone into water.",
      '"What happened to him?"',
      '"I don\'t know exactly. I found his jacket on the road. I understood — I think I understood — what I needed to do. What kind of shape to be. I\'ve been learning."',
      '"Learning," she repeated.',
      '"It\'s not the right word. I\'ve been becoming. Slowly. Imperfectly." He paused. "I\'ve made mistakes."',
      '"The eggs."',
      "Something moved across his face. Among other things.",
      "She looked at her hands. She had spent five months sleeping beside this thing, eating meals it prepared, watching it braid her daughter's hair with a focused, loving care that the real Granad had never once offered. She had watched it make her son laugh. She had watched it tend a garden in clay soil that now, somehow, had green shoots pushing through.",
      '"Are you dangerous?" she asked.',
      '"I don\'t know what I am," he said. "I know what I want to be."',
      '"What\'s that?"',
      "He looked at her across the table, in the lamplight, with Granad's face and something else entirely behind his eyes.",
      '"Enough," he said. "I want to be enough."',
    ],
  },
  {
    number: "VI",
    title: "What Love Learns",
    paragraphs: [
      "There was an evening in the seventh month when Mira was sick.",
      "Fever. The bad kind, that climbed fast and made the air in the room feel different. Gwynetha sat on the edge of the small bed and pressed a cool cloth to her daughter's forehead and felt the particular terror of parenthood — that helpless love that has nowhere to go.",
      "He came and sat on the other side.",
      "He didn't say anything useful. He didn't pretend to have answers. He just stayed. For hours. Through the worst of it, through Mira's confused, frightened murmurings, through Solen waking and crying from his room, through all of it — he simply remained.",
      "At some point in the night, Gwynetha fell asleep against the wall, and when she woke, the cloth had been refreshed and he was still there, watching the child breathe.",
      '"Why?" she asked.',
      '"She\'s afraid," he said. "Afraid shouldn\'t be alone."',
      "She sat with that for a long time.",
    ],
  },
  {
    number: "VII",
    title: "What Remains",
    paragraphs: [
      "The fever broke. The garden grew. The season turned.",
      "She no longer asked herself whether it was right, what was happening in that small house at the edge of everything. The question had become less interesting than the living of it.",
      "He was not Granad. He had never pretended otherwise, not really — not to her, once she'd asked. He was something else, wearing the shape of a man she had married and lost and perhaps, she sometimes thought, never really known at all.",
      "But he was present. He was learning. He was trying to become enough, one day at a time, in the specific and unglamorous way that love actually requires.",
      "She thought sometimes about Granad — the real one, wherever he was, whatever had happened on that road. She held grief for him in one hand and this strange, impossible life in the other, and she did not try to reconcile them. Some things don't reconcile. You just carry both.",
    ],
  },
  {
    number: "—",
    title: "Epilogue: The Shape of Things",
    paragraphs: [
      "One morning, almost a year after he had come back, he left for the settlement at Varne.",
      "He returned before the lamp ran out.",
      "He had traded two jars of preserves for a spool of thread, a length of cloth, and a button — small and brown, exactly the right size.",
      "He set it on the table without a word.",
      "She looked at it for a long time. Then she picked it up, and she began to sew.",
      "Outside, the world was still broken. But inside the house, something impossible had learned what it meant to stay.",
    ],
  },
];

function StoryPart({ part }: { part: (typeof parts)[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="mb-16 last:mb-0"
    >
      {/* Part header */}
      <div className="mb-8 flex items-center gap-5">
        <span className="font-serif text-3xl text-[color:var(--color-blush)]">{part.number}</span>
        <div className="h-px flex-1 bg-[color:var(--color-border-soft)]" />
        <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[color:var(--color-terracotta)]">
          {part.title}
        </span>
        <div className="h-px w-6 bg-[color:var(--color-border-soft)]" />
      </div>

      {/* Paragraphs */}
      <div className="space-y-5">
        {part.paragraphs.map((para, pi) => {
          const isDialogue = para.startsWith('"') || para.startsWith('"');
          const isItalic =
            para === "Not who. What." ||
            para === "I think I didn't know that before." ||
            para === "Among other things.";
          const isPivotal =
            para === '"Enough," he said. "I want to be enough."' ||
            para === '"She\'s afraid," he said. "Afraid shouldn\'t be alone."' ||
            para === "Outside, the world was still broken. But inside the house, something impossible had learned what it meant to stay.";

          return (
            <p
              key={pi}
              className={[
                "font-serif leading-[2] text-[15px]",
                isDialogue
                  ? "border-l-2 border-[color:var(--color-blush)]/50 pl-4 text-[color:var(--color-heading)]"
                  : "",
                isItalic ? "italic text-[color:var(--color-cocoa)]" : "",
                isPivotal ? "font-medium text-[color:var(--color-heading)]" : "",
                !isDialogue && !isItalic && !isPivotal
                  ? "text-[color:var(--color-ink)]/80"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {para}
            </p>
          );
        })}
      </div>
    </motion.div>
  );
}

type Props = { onComplete: () => void };

export function FullStorySection({ onComplete }: Props) {
  return (
    <section id="full-story" className="relative py-24">
      <div className="relative mx-auto max-w-2xl px-6">
        {/* Story header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-[color:var(--color-terracotta)]">
            Full Story
          </p>
          <h2 className="mb-4 font-serif text-4xl text-[color:var(--color-heading)] sm:text-5xl">
            The Shape of a Husband
          </h2>
          <div className="mx-auto mb-6 h-px w-16 bg-[color:var(--color-border-soft)]" />
          <div className="flex items-center justify-center gap-5 text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-ink)]/60">
            <span>Written by Cindy Kandie</span>
            <span className="text-[color:var(--color-border-soft)]">·</span>
            <span>~12 minute read</span>
          </div>
          <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-[color:var(--color-terracotta)]/60">
            Part of the PaintedByCindyk universe
          </p>
        </motion.div>

        {/* Story in a card */}
        <div className="rounded-xl border border-[color:var(--color-border-soft)] bg-[color:var(--color-canvas)] p-8 shadow-[0_20px_60px_var(--color-shadow-soft)] sm:p-12">
          {parts.map((part) => (
            <StoryPart key={part.number} part={part} />
          ))}

          {/* End marker */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onViewportEnter={onComplete}
            transition={{ duration: 1 }}
            className="mt-16 flex flex-col items-center gap-3"
          >
            <div className="h-px w-20 bg-[color:var(--color-border-soft)]" />
            <span className="text-[color:var(--color-heart)] text-lg">❤</span>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-ink)]/50">
              End of story
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

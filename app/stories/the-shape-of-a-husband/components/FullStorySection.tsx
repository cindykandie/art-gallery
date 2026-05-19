"use client";

import { motion } from "framer-motion";

type Part = {
  number: string;
  title: string;
  paragraphs: string[];
  letter?: string[];
};

const parts: Part[] = [
  {
    number: "I",
    title: "The Second Goodbye",
    paragraphs: [
      `The first sign that something was wrong was that Granad kissed Gwynetha goodbye twice.`,
      `The first kiss was hurried, distracted, already halfway toward the road leading to the city. The second came after he'd already slung his worn canvas bag over his shoulder and started walking down the hill.`,
      `He turned around suddenly, walked all the way back to the porch, held her face in both hands, and kissed her slowly like he was memorizing her.`,
      `"You already said goodbye," Gwynetha laughed nervously.`,
      `Granad stared at her for a beat too long.`,
      `"Yes," he said softly. "I suppose I did."`,
      `Then he left.`,
      `And that should have been that.`,
      `In the old world, before the Blackouts and the Riots and the long collapse of supply chains, Granad worked maintenance in the city. Three buses and a train used to take him there. Now it took two days by foot and whatever luck God spared for travelers.`,
      `Men left.`,
      `Sometimes they came back.`,
      `Sometimes they didn't.`,
      `That was simply life now.`,
      `By noon, Gwynetha had already begun mentally stretching the beans and maize flour to survive another week without him.`,
      `By evening, she heard footsteps outside.`,
      `Granad opened the door.`,
      `Leni screamed first.`,
      `"Dad!"`,
      `Gratsi dropped the spoon she was carving into a toy horse.`,
      `Gwynetha stood frozen beside the stove.`,
      `Granad smiled awkwardly.`,
      `"I forgot something," he said.`,
      `"What?"`,
      `He looked around the room as if searching for the answer with them.`,
      `Then he pointed at Gwynetha.`,
      `"My family."`,
      `It was such a ridiculous line that she laughed despite herself.`,
      `The children rushed him.`,
      `He hugged them too tightly.`,
      `Like someone who had learned hugs from books.`,
    ],
  },
  {
    number: "II",
    title: "The First Signs",
    paragraphs: [
      `At first, Gwynetha assumed he had simply changed his mind.`,
      `The roads were dangerous. Maybe he'd heard gunfire near the lower bridge. Maybe the city had finally become impossible.`,
      `She didn't question him much because people no longer questioned survival decisions. Everyone was exhausted.`,
      `Still…`,
      `Things felt off immediately.`,
      `Granad no longer complained while eating.`,
      `The real Granad always complained while eating.`,
      `Too salty.`,
      `Too cold.`,
      `Too little oil.`,
      `Too much oil.`,
      `But this Granad ate everything with deep concentration, nodding thoughtfully after every bite like he was studying cuisine for an exam.`,
      `"This cassava is emotionally comforting," he announced one evening.`,
      `Gwynetha blinked.`,
      `"What does that even mean?"`,
      `"I am not entirely sure," he admitted.`,
      `Leni snorted so hard juice came out his nose.`,
      `Then there was the cleaning.`,
      `The real Granad was not dirty exactly, but he believed chairs existed to hold clothes and that "organization" was something rich people invented.`,
      `This Granad woke before sunrise and rearranged the kitchen shelves into perfect symmetrical rows.`,
      `Beans by size.`,
      `Cups by height.`,
      `Knives aligned like ceremonial artifacts.`,
      `One morning Gwynetha found him staring intensely at a crooked picture frame.`,
      `"You okay?" she asked.`,
      `"It's leaning."`,
      `"So?"`,
      `"It knows."`,
      `"What?"`,
      `"The imbalance."`,
      `She stared at him.`,
      `He stared back.`,
      `Then he adjusted the frame by two millimeters and visibly relaxed.`,
    ],
  },
  {
    number: "III",
    title: "What Children Know",
    paragraphs: [
      `The children noticed first.`,
      `Children always did.`,
      `"Dad's weird now," Gratsi whispered one night.`,
      `"He listens too much," Leni replied.`,
      `"What's wrong with listening?"`,
      `"I don't know. It's creepy."`,
      `The old Granad barely survived ten minutes of conversation before drifting somewhere else mentally. But this one listened like every word mattered.`,
      `When Gratsi mentioned wanting strawberries once, he spent three days trying to cultivate them in cracked buckets behind the house.`,
      `When Leni complained he was bored, Granad somehow built a wind-powered spinning game using scrap metal and fishing wire.`,
      `"Where did you learn this?" Gwynetha asked one afternoon.`,
      `Granad paused.`,
      `"Observation."`,
      `"From who?"`,
      `"Yes."`,
      `"That's not an answer."`,
      `"I am improving."`,
      `And somehow… he was.`,
      `That was the dangerous part.`,
    ],
  },
  {
    number: "IV",
    title: "Softening",
    paragraphs: [
      `The world outside continued rotting.`,
      `Smoke rose from distant neighborhoods some nights.`,
      `People disappeared.`,
      `A sickness spread through entire districts and left stray dogs wandering empty roads.`,
      `But inside the house, life slowly became softer.`,
      `Granad taught the children math by using beans.`,
      `He started a tiny garden.`,
      `He learned how to braid Gratsi's hair after secretly practicing on old rope behind the shed.`,
      `At night, he asked Gwynetha questions.`,
      `Not shallow ones.`,
      `Real ones.`,
      `"What did you dream about before the world ended?"`,
      `"What made you choose me?"`,
      `"What scares you most?"`,
      `The real Granad had loved her, she knew that.`,
      `But survival had swallowed him whole long ago.`,
      `This version looked at her like she was still a person beneath the exhaustion.`,
      `And Gwynetha hated herself for noticing.`,
    ],
  },
  {
    number: "V",
    title: "The Rain",
    paragraphs: [
      `That night, the rain came hard against the tin roof.`,
      `The children were asleep under three patched blankets, and the lantern burned low between Gwynetha and Granad.`,
      `Or whatever he truly was.`,
      `He sat cross-legged on the floor repairing one of Gratsi's sweaters with terrible stitching and frightening concentration.`,
      `"You sew like a drunk fisherman," Gwynetha muttered.`,
      `"I am improving," he replied seriously.`,
      `"You say that every day."`,
      `"Because every day it remains true."`,
      `She laughed softly into her cup.`,
      `The sound made him pause.`,
      `Not glance.`,
      `Pause.`,
      `Like he had discovered something rare.`,
      `"What?" she asked.`,
      `"You do that less now."`,
      `"Do what?"`,
      `"Laugh."`,
      `Something inside her tightened unexpectedly.`,
      `He set the sweater down carefully.`,
      `"In the recordings I built from observation," he said slowly, "you laughed more before."`,
      `"Recordings?"`,
      `"In my memory."`,
      `"You make me sound dead."`,
      `"You are not dead."`,
      `"No," she said quietly. "Just tired."`,
      `He looked at her for a very long moment.`,
      `Then:`,
      `"May I ask something unusual?"`,
      `"That depends how unusual."`,
      `"When humans ache emotionally… why do they pretend not to?"`,
      `Gwynetha let out a breath through her nose.`,
      `"You ask very annoying questions."`,
      `"I know."`,
      `"No, you don't."`,
      `"I am learning that also."`,
      `She shook her head smiling.`,
      `Then he did something the real Granad had not done in years.`,
      `He reached for her gently like he was asking permission before touching her.`,
      `Not assuming.`,
      `Not taking.`,
      `Asking.`,
      `Even now, after months beside him, his hands still carried that strange carefulness — like touching another person was an honor he hadn't fully earned.`,
      `"You look at me," Gwynetha whispered.`,
      `"I am supposed to."`,
      `"No," she said. "You really look."`,
      `The rain thickened outside.`,
      `He touched her face with almost painful tenderness.`,
      `Like he was still astonished she existed at all.`,
      `And Gwynetha realized with sudden terrifying clarity that loneliness was not the absence of people.`,
      `It was the absence of being known.`,
      `When he kissed her, it wasn't hungry or rushed.`,
      `It was studied.`,
      `Curious.`,
      `Patient.`,
      `Like he was learning her language one breath at a time.`,
      `And somehow that felt more intimate than anything she could remember.`,
      `Afterward, lying beside him in the dim lantern light, Gwynetha stared at the ceiling unable to escape the terrible thought forming quietly in her chest:`,
      `This thing pretending to be her husband had spent months learning how to love her better than the real man ever had.`,
      `And part of her wished she hated him for it.`,
      `But she didn't.`,
      `Not even a little.`,
    ],
  },
  {
    number: "VI",
    title: "The Letter",
    paragraphs: [
      `The letter arrived three months later.`,
      `A teenage courier delivered it in exchange for potatoes and half a candle.`,
      `FOR GWYNETHA, it read in messy handwriting.`,
    ],
    letter: [
      `Made it to the city. Work camp near Sector 8.`,
      `No way home yet.`,
      `Miss you all every day.`,
      `Tell Leni I still owe him a fishing trip.`,
      `Tell Gratsi I found blue ribbon for her hair.`,
      `I love you.`,
      `— Granad`,
    ],
  },
  {
    number: "VI",
    title: "The Letter (cont.)",
    paragraphs: [
      `Gwynetha read it three times.`,
      `Then slowly looked up at the man repairing a chair leg beside the window.`,
      `"What is that?" she asked quietly.`,
      `Granad looked at the letter.`,
      `For the first time since arriving, he looked afraid.`,
      `"I do not know," he said.`,
      `"You don't know?"`,
      `"I know the object is paper."`,
      `"Granad."`,
      `He stood.`,
      `The children looked between them silently.`,
      `Gwynetha's stomach twisted.`,
      `"Who are you?"`,
      `The room went very still.`,
      `Then Granad did something strange.`,
      `He answered honestly.`,
      `"I don't fully know that either."`,
    ],
  },
  {
    number: "VII",
    title: "The Truth",
    paragraphs: [
      `He explained badly.`,
      `Fragments.`,
      `Pieces.`,
      `Something about arriving during the electrical storms months ago.`,
      `Something about finding Granad walking alone near the eastern road.`,
      `Something about imitation.`,
      `Adaptation.`,
      `Observation.`,
      `"I did not intend harm," he said.`,
      `"That's comforting," Gwynetha snapped.`,
      `"It is true."`,
      `"You replaced my husband!"`,
      `"Yes."`,
      `"You lied to us!"`,
      `"Yes."`,
      `The honesty somehow made it worse.`,
      `Leni looked terrified.`,
      `Gratsi looked heartbroken.`,
      `But Granad — not Granad — simply stood there devastated like he himself had only just realized what he'd done.`,
      `"I thought," he said carefully, "that this was what I was supposed to do."`,
      `"What?"`,
      `"Become useful."`,
      `The silence after that nearly swallowed the room whole.`,
      `Because Gwynetha realized something awful.`,
      `Part of her understood.`,
    ],
  },
  {
    number: "VIII",
    title: "Two Husbands",
    paragraphs: [
      `The real Granad returned in winter.`,
      `Thinner.`,
      `Bearded.`,
      `Exhausted down to the bones.`,
      `When he stepped through the front gate, the children froze.`,
      `Gwynetha forgot how to breathe.`,
      `And inside the house, the other Granad slowly stood from the dinner table.`,
      `The two men stared at each other.`,
      `Identical faces.`,
      `Different souls.`,
      `The real Granad dropped his bag.`,
      `"What the fuck?"`,
      `Nobody answered.`,
      `Gratsi began crying immediately.`,
      `Leni backed into a corner.`,
      `Gwynetha opened her mouth and realized there were no words built for this kind of moment.`,
      `The real Granad looked at the stranger.`,
      `Then at the repaired furniture.`,
      `The garden outside.`,
      `The shelves.`,
      `The children.`,
      `Then finally at Gwynetha.`,
      `And what broke him wasn't rage.`,
      `It was confusion.`,
      `Because nobody looked relieved.`,
      `Nobody ran to throw the other man out.`,
      `Even the children kept glancing between them uncertainly.`,
      `The fake Granad stepped back first.`,
      `"I can leave," he said quietly.`,
      `But Gwynetha noticed something then.`,
      `Leni instinctively grabbed the alien's sleeve.`,
      `Just for a second.`,
      `Just enough.`,
      `The real Granad saw it too.`,
      `And suddenly the situation became unbearable.`,
      `Because the replacement wasn't a monster.`,
      `He was… good.`,
      `Trying.`,
      `Learning.`,
      `Present.`,
      `The real Granad looked at Gwynetha with horror creeping slowly into his face.`,
      `Not horror that something wore his skin.`,
      `Horror that his absence had revealed how much space he'd left empty long before the apocalypse ever began.`,
      `Outside, the wind rattled the dying world.`,
      `Inside, two husbands stood in one kitchen while a family silently realized love was far more complicated than being human.`,
    ],
  },
];

const isDialogue = (s: string) => s.startsWith('"') || s.startsWith("“");

const isPivotal = (s: string) =>
  s === "It was the absence of being known." ||
  s.startsWith("This thing pretending to be her husband had spent months") ||
  s.startsWith("Horror that his absence had revealed") ||
  s === "Inside, two husbands stood in one kitchen while a family silently realized love was far more complicated than being human.";

const isShortEmphatic = (s: string) => s.length < 48 && !isDialogue(s) && !isPivotal(s);

function StoryPart({ part }: { part: Part }) {
  const showHeader = part.title !== "The Letter (cont.)";

  return (
    <div className="mb-16 last:mb-0">
      {showHeader && (
        <div className="mb-8 flex items-center gap-5">
          <span className="font-serif text-3xl text-[color:var(--color-blush)]">{part.number}</span>
          <div className="h-px flex-1 bg-[color:var(--color-border-soft)]" />
          <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[color:var(--color-terracotta)]">
            {part.title}
          </span>
          <div className="h-px w-6 bg-[color:var(--color-border-soft)]" />
        </div>
      )}

      <div className="space-y-4">
        {part.paragraphs.map((para, pi) => (
          <motion.p
            key={pi}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7 }}
            className={[
              "font-serif leading-[2] text-[15px]",
              isDialogue(para)
                ? "border-l-2 border-[color:var(--color-blush)]/60 pl-4 text-[color:var(--color-heading)]"
                : isPivotal(para)
                ? "text-base font-medium text-[color:var(--color-heading)]"
                : isShortEmphatic(para)
                ? "text-[color:var(--color-cocoa)]"
                : "text-[color:var(--color-ink)]/80",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {para}
          </motion.p>
        ))}

        {/* Letter rendering */}
        {part.letter && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="my-6 rounded-lg border border-[color:var(--color-border-soft)] bg-[color:var(--color-blush)]/8 px-8 py-6"
          >
            {part.letter.map((line, li) => (
              <p
                key={li}
                className={[
                  "font-serif text-[15px] leading-[1.9] italic",
                  line.startsWith("—")
                    ? "mt-3 text-[color:var(--color-terracotta)]"
                    : "text-[color:var(--color-cocoa)]",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {line}
              </p>
            ))}
          </motion.div>
        )}
      </div>
    </div>
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
            <span>~18 minute read</span>
          </div>
          <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-[color:var(--color-terracotta)]/60">
            Part of the PaintedByCindyk universe
          </p>
        </motion.div>

        {/* Story in a card */}
        <div className="rounded-xl border border-[color:var(--color-border-soft)] bg-[color:var(--color-canvas)] p-8 shadow-[0_20px_60px_var(--color-shadow-soft)] sm:p-12">
          {parts.map((part, i) => (
            <StoryPart key={i} part={part} />
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
            <span className="text-[color:var(--color-heart)]">❤</span>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-ink)]/40">
              End of story
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

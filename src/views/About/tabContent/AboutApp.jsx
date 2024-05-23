import styles from "./tabContent.module.css";

export default function AboutApp() {
	return (
		<>
			<p className={styles.p}>
				Introducing
				<span className={styles.purplePSpan}> PetSynth</span>— your
				gateway to a universe teeming with the most delightful, bizarre,
				and utterly peculiar virtual companions. Say goodbye to boring
				old pets and hello to a menagerie of digital marvels that defy
				the imagination. Whether you’re in the market for a cyborg
				chameleon or an alien alpaca, our app has you covered.
			</p>
			<p className={styles.p}>
				At <span className={styles.purplePSpan}>PetSynth</span>, we
				believe that if you can dream it, we can code it. Want a feline
				with tentacles and a penchant for interstellar travel? Done. How
				about a bioluminescent bunny that speaks in binary? Consider it
				yours. Our virtual companions aren’t just pets—they’re a blend
				of cutting-edge AI, quirky design, and a sprinkle of madness,
				designed to bring a spark of joy and a touch of the bizarre to
				your digital life.
			</p>
			<p className={styles.p}>
				Creating your perfect pet is a breeze with our user-friendly
				interface. Picture this: you’re asked to describe your ideal
				companion using a mix of sliders*, checkboxes*, and free-form
				text. Do you want your creature to be more cuddly or more
				chaotic? Should it communicate through purrs, growls, or cryptic
				Morse code? The possibilities are endless, and frankly, a bit
				absurd. You’ll also provide personal preferences, like whether
				you need a nocturnal buddy or a sassy sidekick. And let’s not
				forget the aesthetic choices: fur, scales, feathers, or perhaps
				something entirely extraterrestrial?
			</p>
			<p className={styles.p}>
				But wait, there’s more! Our app* doesn’t just stop at creation;
				it ensures your pet is as interactive as it is unique. With
				advanced behavioral algorithms, your pet will adapt to your
				lifestyle and preferences. Teach your cybernetic cat to play
				fetch or have your alien alpaca serenade you with tunes from a
				distant galaxy. And if you’re feeling particularly adventurous,
				enable the “mischief mode” to watch your companion pull off
				hilariously unpredictable antics.
			</p>
			<p className={styles.p}>
				In short, the
				<span className={styles.purplePSpan}>PetSynth</span> App* is
				your ticket to a world where the mundane is banished, and the
				extraordinary reigns supreme. So go ahead, embrace the absurdity
				and create a companion that’s as wonderfully weird as you are.
				After all, in the land of PetSynth, normal is just a setting on
				the washing machine.
			</p>
			<br />
			<aside className={styles.aboutAside}>
				* mobile app, mixers, and sliders coming soon, not all features
				are fully available at this stage.
			</aside>
		</>
	);
}

import styles from "./tabContent.module.css";

export default function AboutTeam() {
	return (
		<>
			<img
				className={styles.img}
				src="/img/teamphoto.png"
				alt="A group of people smiling at the camera with their eyes censored by long black rectangles"
				width={3887}
				height={2496}
			></img>
			<div className={styles.twoColumns}>
				<div>
					<p className={styles.p}>
						Welcome to the whimsical world of{" "}
						<span className={styles.purplePSpan}> PetSynth</span>!
						We're not your average pack of entrepreneurs; we're a
						trio of maverick minds on a mission to revolutionize the
						way humans connect with their virtual companions. At the
						helm of this fantastical journey are three non-binary
						pioneers, each bringing a unique blend of creativity,
						technical prowess, and a dash of mischief to the table.
					</p>
					<p className={styles.p}>
						First up, meet{" "}
						<span className={styles.purplePSpan}>Kermit</span>, our
						resident web design virtuoso. With a penchant for
						pixel-perfect precision and an eye for aesthetics that
						could rival the Mona Lisa, Kermit crafts digital
						landscapes where imagination knows no bounds. Their
						designs are more than just pretty pixels; they're
						portals to parallel universes where pets and people
						frolic together in harmony.
					</p>
					<p className={styles.p}>
						Next in our merry band of misfits is{" "}
						<span className={styles.purplePSpan}>Hogley</span>, the
						coding wizard extraordinaire. Armed with a keyboard and
						a bottomless mug of council pop, Hogley transforms
						whimsical dreams into digital realities with a flick of
						their fingers. Their code is poetry in motion, weaving
						intricate algorithms that breathe life into our virtual
						companions, one line at a time.
					</p>
				</div>
				<div>
					<p className={styles.p}>
						And finally, there's{" "}
						<span className={styles.purplePSpan}>C Grizzle</span>,
						the entrepreneurial powerhouse with a heart of greige
						and a mind for business blunter than a rolling pin. Old
						Grizzle's the glue that holds our ragtag team together,
						navigating the murky waters of commerce with a grimace
						but a steadfast resolve. Their vision extends beyond
						profit margins; they see
						<span className={styles.purplePSpan}> PetSynth</span> as
						a catalyst for positive change in a world hungry for
						connection and compassion.
					</p>
					<p className={styles.p}>
						Together, we're more than just a business; we're a
						movement. We believe in the transformative power of
						technology to bridge divides, foster empathy, and spread
						joy to every corner of the globe. With every
						custom-crafted{" "}
						<span className={styles.purplePSpan}> PetSynth </span>
						creation, we're not just selling a product; we're sowing
						the seeds of understanding and empathy that will one day
						blossom into a world where peace reigns supreme.
					</p>
					<p className={styles.p}>
						So whether you're seeking a faithful feline friend to
						frolic in your digital garden or a loyal canine
						companion to keep you company on your virtual
						adventures,{" "}
						<span className={styles.purplePSpan}> PetSynth </span>is
						here to make your wildest dreams come true. Join us on
						this magical journey as we redefine what it means to
						connect, one pixelated paw at a time. After all, in a
						world where anything is possible, why settle for
						ordinary when you can have extraordinary?
					</p>
				</div>
			</div>
		</>
	);
}

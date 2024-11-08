import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ChemistryOfEarth = () => {
  const note = styles.note;
  const highlightTextInNote = styles.highlightTextInNote;
  const subTopic = styles.subTopic;

  const NoteText = ({ children }) => {
    return <Text style={note}>{children}</Text>;
  };

  const HighlightText = ({ children }) => {
    return <Text style={highlightTextInNote}>{children}</Text>;
  };

  const SubTopic = ({ children }) => {
    return <Text style={subTopic}>{children}</Text>;
  };

  const List = ({ children }) => {
    return (
      <Text style={styles.list}>
        <Text style={{ fontWeight: "900", fontSize: 25 }}>.</Text> {children}
      </Text>
    );
  };

  const ItalicText = ({ children }) => {
    return <Text style={styles.italicText}>{children}</Text>;
  };

  const Sup = ({ children }) => {
    return <Text style={styles.superText}>{children}</Text>;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.overallTopic}>CHEMISTRY OF EARTH</Text>
      <View>
        <Text style={note}>
          The Universe includes everything we know but no one know it's size,
          how it began or when it will end. Some astronomers say that the
          Universe was formed in the distant past when a single body of matter
          exploded to form a galaxies which spread out through space.
        </Text>
        <Text style={note}>
          A galaxy is a huge collection of
          <Text style={highlightTextInNote}> stars, gas and dust.</Text>
        </Text>
        <Text style={note}>
          {" "}
          Our own star, the
          <Text style={highlightTextInNote}> Sun</Text>, is one of the more than
          <Text style={highlightTextInNote}> 100,000 millions </Text>
          stars that make up our galaxy,
          <Text style={highlightTextInNote}> THE MILKY WAY</Text>. For a long
          time, astronomers thougth that our galaxy was the whole Universe. We
          now know that a large number of other galaxies exist beyond our own.
          Earth is one of the planets that orbit round the Sun. It is the only
          planet that is known to have life.
        </Text>
        <Text style={subTopic}>Age of Earth</Text>
        <Text style={note}>
          Various methods were used in the past to find out the age of Earth.
          The most exact method is based on the study of the radioactivity of
          certain minerals in which one or more radioactive elements decay to
          form other elements
        </Text>
        <Text style={note}>
          A radioactive element decays to a daugter element at a constant and
          known rate that is known as its half-life. The half-life is not
          affected by external conditions. As the radioactive element decays,
          it's quantity in a particular rock decreases while the quantity of
          daughter element increases. Scientists are able to calculate the age
          of the rock or mineral from :{" "}
        </Text>
        <List>
          the decay rate of the radioactive element (which are known), and
        </List>
        <List>the ratios of the parent and daughter elements.</List>
        <NoteText>
          The radioactive isotopes most commonly used for these studies include
          carbon- 14, rubidium-87, potassium-40, uranium-235, uranium-238 and
          thorium-232. The quantities are measured by radiation detectaors. The
          method is not exact and the ages obtained may vary by as much as
          several hundred million years.
        </NoteText>
        <NoteText>
          Studies using the above method show that the oldest known rock on
          Earth was formed nearly 4.0 x 10
          <Sup className="raiseToPower">9</Sup> years ago. Based on this, we can
          say that Earth is between 4.5 x 10
          <Sup className="raiseToPower">9</Sup> to 5.0 x 10
          <Sup className="raiseToPower">9</Sup> years old.
        </NoteText>
        <SubTopic>Structure of Earth</SubTopic>
        <NoteText>Earth is made up of three parts: </NoteText>
        <List>
          the atmosphere which is the layer of air that surrounds the planet;
        </List>
        <List>the hydrosphere, which is the part composed of water; and</List>
        <List>the lithosphere, which is the solid part</List>
        <SubTopic>Atmosphere</SubTopic>
        <NoteText>
          The air surrounding Earth is composed of about 78% nitrogen, 21%
          Oxygen and I% other gases including carbon(IV) oxide, water vapour and
          the rare gascs. Dust and air pollutants are also present in the
          atmosphere, especially in the big cities, and industrial and
          agricultural are as. The atmosphere extends to a height of more than
          450 km from the surface of Earth.
        </NoteText>
        <NoteText>
          The lower layer (up to about 10 km at the poles and about 17 km at the
          equator above the Earth's surface) is known as the troposphere. This
          is the region where great changes in temperature and water vapour
          content of the air take place. It is the part of the atmosphere which
          determines the weather-clouds form here, and the rains, thunder and
          lightning occur here.
        </NoteText>
        <NoteText>
          The next atmospheric layer, cxtending from about 10 to 17 km to about
          4S km above the surface of Earth is known as the stratosphere. This is
          the zone of horizontal air movements. The fast moving currents of air
          travel at speeds of up to 400 km h The temperature in the stratosphere
          rises from -60 °C at an altitude of about 10 km to 0°C at about 45 km,
          This increase in temperature is due to the absorption of ultraviolet
          radiation by the ozone layer in the stratosphere.
        </NoteText>
        <NoteText>
          {" "}
          NoTE: The build-up of the ozone layer in the stratosphere is due to
          the photo-dissociation of Oxygen molecules. O<Sup>2</Sup>, into single
          oxygen atoms, O, by the Sun's ultraviolet rays. When an atomic oxygen
          collides with an oxygen molecule, an ozone molecule, 0,. is forned.
          Ozone molecules can dissociate to give ordinary oxygen molecules.
        </NoteText>
        <NoteText>
          The next layer of the atmosphere is known as the mesosphere. It
          extends from about 45 km to about 75 km. The air of the mesosphere is
          less dense than that of the stratosphere. The temperature varies from
          0°C at an altitude of about 45 km to -90°Cat about 75 km.
        </NoteText>
        <NoteText>
          The region of the atmosphere extending from about 75 km to about 400
          km is known as the thermosphere. The air in the thermosphere is thin.
          This layer is also referred to as the ionosphere because many of the
          molecules and atoms in this region are ionized by the radiation from
          space and the Sun. The region beyond 400 km is known as the exosphere
          The ar in this layer is extremely ihin and consists Hatnly into space
          nnd eventually merges with the Suns of hydrogen. The exosphere
          COninues indetinitely atmosphere.
        </NoteText>
        <SubTopic>Hydrosphere</SubTopic>
        <NoteText>
          Water forms a discontinuous layer over about 71% of the Earth's
          surface. Approximately 98% of the: total mass of water is in the form
          of salt-water the oceans and seas. Fresh water is present in inland
          lakes, in the soil (as ground water) and in the pores of rocks. Ground
          water flows to the surface of Earth as spring water and Hows into
          streams and rivery The permanent regions of snow, at the poles and at
          high altitudes, consist of frozen water. Earth is the only planet in
          the Solar System that contains large amounts of water. This water is
          continuously circulated through the hydrosphere with the oceans acting
          as reservoirs. Thus, water evaporates from the surfaces of the water
          bodies and precipitates as rainfall (or snow).
        </NoteText>
        <NoteText>
          Many substances are found dissolved in water. The most abundant of
          these is sodium chloride. The others are composed mainly of the
          chlorides and tetraoxosulphates(VI) of magnesium. calcium and
          potassium. Dissolved gases such as nitrogen. oxygen and carbon(IV)
          oxide are also present, with the last two being important for
          biological activity.
        </NoteText>
        <SubTopic>Lithosphere</SubTopic>
        <NoteText>
          The lithosphere is composed of rocks and soil. It may be considered to
          be made up of three parts: the crust, mantle and core.
        </NoteText>
        <NoteText>
          The outermost part is called the crust and extends to a depth of about
          30 km in the continental areas and about 8 km in the main ocean
          floors.
        </NoteText>
        <NoteText>
          The portion below the crust is known as the interior of Earth. From
          studies of earthquakes, volcantc activities and other phenomena,
          scientists think that it consists of a nickel-iron (or possibly pure
          iron) centrat core, surrounded by a mantle. The mantle which is about
          2 900 km thick is thought to be plastic, 1e. neither solid nor liquid.
          The nickel-iron central core consists off a solid inner core and a
          liguid outer core: The diameter of the whole core is about 7 000 km.
        </NoteText>
        <NoteText>
          About a hundred different elements may be listed as components of the
          Earth's lithosphere. Of these Oxygen is the most abundant. It exists
          in combination with other elements. mainly as oxides. The next most
          abundant element is silicon, which is found commonly as silicon(IV)
          oxide.
        </NoteText>
        <NoteText>
          Most of the other elements are also found as compounds although a few
          exist in the pure state.
        </NoteText>
        <NoteText>
          The compounds of the lighter elements are found mainly in the Earth's
          crust and include oxides, trioxocarbonates (IV) and
          tetraoxosulphates(VI) of sodium, magnesium , aluminium and calcium.
          The interior of Earth is composed mainly of heavier elements and their
          compounds, e.g. the dense rocks in the mantle are composed of
          trioxosilicates(IV) of iron and magnesium.
        </NoteText>
        <SubTopic>USING SPECTROScOPY TO STUDY THE PLANETS AND STARS</SubTopic>
        <NoteText>
          When sunlight passes througha prism, It is dispersed to give a band of
          coloured lights known as a spectrum. Prisms are used in spectroscopes
          to disperse all types of electromagnetic radiation to give spectra.
          Nowadays, diffraction gratings are used in most spectroscopes instead
          of prisms since they give very sharp spectra.
        </NoteText>
        <NoteText>
          NoTE A diffraction grating, used in a spectroscope, is a polished
          metal or miror surface on which is ruled a large number of fine,
          equidistant, closely packed parallel lines.
        </NoteText>
        <NoteText>There are two types of spectra:</NoteText>
        <List>emission spectra, and</List>
        <List>absorption spectra.</List>
        <SubTopic>Emission spectra</SubTopic>
        <NoteText>
          These are observed when light from a source undergoes dispersion
          directly. For example, when light from a glowing sodium source is
          examined through a spectroscope, wc see a line emission spectrum which
          consists of two bright yellow lines very close together in a dark
          background. A glowing hydrogen source emits a spectrum with red,
          blue-green and violet lines.
        </NoteText>
        <NoteText>
          Usually, line emission spectra are emitted by atoms and ions which are
          not interacting. Band emission spectra which is composed of groups or
          bands of lines are emitted by molecules of glowing gases or vapours.
          Continuous emission spectra are emitted by hot solids, liquids and
          gases at high pressures where the molecules are close enough to
          interact.
        </NoteText>
        <SubTopic>Absorption spectra</SubTopic>
        <NoteText>
          These are observed when the emitted light passes through a material
          that partially absorbs it before it is dispersed. For example, when
          white light passes through a cool gas or vapour, a line absorption
          spectrum is obtained. Dark lines occur in the continuous spectrum of
          white light. These lineg Occur at exactly the same positions as the
          coloured lines in the emis sion spectrum 0T the gas or vapour. Thus.
          the emission and absorption spectra of an element arc the same except
          that in the former the enectum consists of bright coloured lines in a
          dark backeround, while in the latter it consists of darlk lines in a
          bright backgrund. As in the emission Spectra. band and continuous
          absoption spectra also obtained.
        </NoteText>
        <NoteText>
          Each element emits a characteristic line emission or absorption
          spectrum which can be used to identify it. Thus, by using a
          spectroscope, the chemical composition of the source that emits a
          particular radiation or the material that absorbs the radiation can be
          identified. Spectroscopic methods are extremely sensitive and can
          detect the presence of minute quantities of materials.
        </NoteText>
        <NoteText>
          Spectroscopy is used to analyze the light from stars and the reflected
          sunlight from planets to get information about the chemical
          composition of these heavenly bodies. Sophisticated astronomical
          spectroscopes and spectrographs (instruments which take photographs of
          spectra) are used for such stellar and planetary spectroscopic
          studies.
        </NoteText>
        <NoteText>
          A star's spectrum provides information about its temperature,
          luminosity and chemical composition. The chemical composition includes
          the identity of the elements present and whether they are present as
          compounds, molecules, atoms or ions.
        </NoteText>
        <NoteText>
          Spectroscopic studies of sunlight reflected by a planet provide
        </NoteText>
        <List>
          characteristics of the constituents of the atmosphere of the planet
          through which the solar radiation travelled; and
        </List>
        <List>
          the nature of the solid surface or cloud material from which the
          radiation is reflected.
        </List>
        <SubTopic>THE SOLAR SYSTEM</SubTopic>
        <NoteText>
          The Sun and all the bodies orbiting round it make up the Solar System.
          The Sun is a star because it glows all the time giving off its own
          heat and light. The planets and their moons are the main bodies that
          revolve round the Sun. These bodies shine because they refiect the
          Sun's light that falls on them. Other bodies in the Solar System are
          the asteroids, comets and meteoroids.
        </NoteText>
        <NoteText>
          Nearest the Sun is Mercury, the smallest of the planets. Then come
          Venus, Earth, Mars, Jupiter, Saturn. Uranus, Neptune and Pluto. The
          distance across the Solar System is about 12000 million kilometres.
        </NoteText>
        <SubTopic>The Sun</SubTopic>
        <NoteText>
          The Sun is a vast ball of hot glowing gas. It has a diameter that is
          more than 100 times that of Earth and a mass about 333400 times that
          of Earth. It has an enormous gravitational pull about 28 times
          stronger than that of Earth. Thus, the Sun controls the movements of
          all the bodies in the Solar System, except those of the moons.
        </NoteText>
        <SubTopic>The Savage Sun</SubTopic>
        <NoteText>
          The sun is a medium sized plant but its energy and violence defy
          imagination. Every second, 4,000,000 tons of hydrogen are consumed in
          reactions which take place at its core where the temperature can reach
          15 x 10^6^°C(10 raise to power 6). All the earth's supply of oil, gas
          wood, and any other thing that can burm can only supply the energy of
          the sun for a few days.
        </NoteText>
        <NoteText>
          The sun. however, is like a hydrogen bomb burming slowly. Scientists
          estimate that in 8000 million years, the sun will exhaust its supply
          of hydrogen and in its desire to obtain hydrogen will expand and fry
          the earth. This they believe will be the natural end of the world.
        </NoteText>
        <NoteText>
          The density of the Sun is only 14 times that of water, while Earth has
          a density that is 5.5 times that of water. This is because Earth is
          composed of dense rocks while the Sun consists mainly of very light
          elements.
        </NoteText>
        <NoteText>
          The solar atmosphere is composed of two layers-the lower layer is the
          chromosphere and the higher layer is the corona. The bright disc of
          the Sun from which light and heat are given off is the photosphere.
          Clouds of burning gas shoot up into space forming prominences. The
          dark spots on the Sun's surface are the sunspots.
        </NoteText>
        <NoteText>
          Analysis of the solar spectra from the Sun's corona and photosphere
          shows that the bulk of the solar gases is made up of hvdrogen. Helium
          makes up about 15% of the solar gases and a very small amount is
          composed of the other elements such as boron, carbon, nitrogen,
          oxygen, fluorine, neon, sodium, magnesium. aluminium, silicon,
          phosphorus, calcium and iron found on Earth. Most of the elements are
          present predominantly as atoms and positive ions in various stages of
          ionization. The emission spectra show that many electron transitions
          occur within atoms, especially of argon, calcium and the transition
          metal group (chromium, manganese, iron, cobalt and nickel), which are
          practically impossible to achieve on Earth. Molecules are relatively
          rare because of the high temperature. They may be observed on spectra
          from sunspots which have ternperatures that are lower than the other
          parts of the Sun.
        </NoteText>
        <NoteText>
          The Sun has a temperature of about 6000°C at its surface and about
          15000000°C at its core. This heat is produced by nuclear fusion
          reactions. The most important fusion process is the fusion of the
          nuclei of two hydrogen atoms (i.e. proton-proton reaction) to produce
          a deuterium atom, with a simultaneous release of a positron and a
          neutrino. The deuterium atom may collide with another hydrogen atom to
          form a helium isotope with an atomic mass of 3 and gamma-rays. Two
          such helium isotopes may collide to produce a stable helium atom with
          an atomic mass of 4, while releasing two protons and gamma rays. All
          these nuclear fusion reactions release an immense amount of energy.
        </NoteText>
        <NoteText>
          NOTE :{" "}
          <ItalicText>
            A positron is a positive electron (e+). A neutrino (v) is a particle
            without charge, of negligible mass and with a great penetrating
            power.
          </ItalicText>
        </NoteText>
        <SubTopic>The Moon</SubTopic>
        <NoteText>
          The Moon is Earth's natural satellite and our nearest neighbour in
          space. It is about <HighlightText>384400 km</HighlightText> away from
          Earth. The diameter of the Moon is about one-quarter that of Earth.
          Its gravity is only one-sixth that of Earth.
        </NoteText>
        <NoteText>
          The Moon revolves around Earth once every 27.32 days. In the same
          period, it completes one rotation on its own axis. Therefore, the same
          side of the Moon is always facing Earth. There is no water or air on
          the Moon. As a result, it is very hot (about 120°C) when lit by the
          Sun and very cold (about -180°C) when it is not. The Moon's surface
          has many craters, jagged mountains and flat dustcovered plains known
          as seas.
        </NoteText>
        <NoteText>
          Studies of the rocks, brought back from the Moon, show that the Moon
          is as old as Earth, i.e. about 4 800 million years old. Although lunar
          rocks look similar to those on Earth, their chemical compositions are
          different.
        </NoteText>
        <SubTopic>The Planets</SubTopic>
        <NoteText>
          Mercury, Venus, Earth and Mars are known as the terrestrial planets.
          They are all about the same size and mass. They are dense because they
          are rich in rocks and minerals. Jupiter, Saturn, Uranus and Neptune
          are much larger than the terrestrial planets. They are also less dense
          because they are made up of light gases such as hydrogen, helium,
          ammonia and methane. Pluto is less dense like the other outer planets,
          but unlike them, it is small.
        </NoteText>
        <NoteText>
          All the planets revolve around the Sun and at the same time rotate on
          their axes from west to east except for Venus, which rotates in the
          opposite direction.
        </NoteText>
        <SubTopic>Mercury</SubTopic>
        <NoteText>
          <ItalicText>Mercury</ItalicText> is a small rocky, sun-scorched planet
          whose surface is similar to that of the Moon. The temperature of the
          side facing the Sun is so high that even lead would melt, while the
          other side is extremely cold.
        </NoteText>
        <NoteText>
          Mercury's scanty atmosphere is composed mainly of hydrogen, helium and
          neon. Its mass and volume are about one-sixteenth those of Earth.
          Although Mercury is a smaller planet, its density is nearly the same
          as the Earth's. ThiS indicates that it may have a core of dense
          metals.
        </NoteText>
        <SubTopic>Venus</SubTopic>
        <NoteText>
          <ItalicText>Venus</ItalicText> is similar to Earth in size, mass and
          density. The planet is completely covered with opaque white clouds.
          The atmosphere of Venus consists of 96% carbon(IV) oxide, 3.5%
          nitrogen and traces of other gases such as sulphur(lV) oxide, argon,
          carbon(lI) oxide, oxygen, hydrogen chloride, hydrogen fluoride and
          water. Its atmospheric pressure is 60 to 100 times that of Earth.
          while its surface temperature is about 460°C.
        </NoteText>
        <SubTopic>Earth</SubTopic>
        <NoteText>
          <ItalicText>Earth</ItalicText> is a rocky planet that is almost
          spherical, with a polar radius of 6356 km and an equatorial radius of
          6378 km. Earth is the only planet in the Solar System that lies in a
          region with a temperature that can support life. In addition, it has
          an abundance of Oxygen and water on its surface -two substances that
          are essential for life.
        </NoteText>
        <SubTopic>Mars</SubTopic>
        <NoteText>
          <ItalicText>Mars</ItalicText> is a dry cold planet with temperatures
          at its cquator that vary berween 25 °C in the afternoon to -40°C at
          night. Mars has many earthlike features such as clouds, mountains,
          craters, deserts and polar ice- caps. These led astronomers to believe
          that intelligent beings lived on Mars. These ideas had to be abandoned
          after studies showed that most parts of Mars do not have water. The
          polar caps are a frozen mixture of water and carbon(IV) oxide. The
          clouds are composed of dust, not water vapour. Great dust storms sweep
          through the airless deserts at high speeds.
        </NoteText>
        <NoteText>
          Mars has a thin atmosphcre, which consists of about 96.5% carbon(IV)
          oxide, 1.5% nitrogen, 1.5% argon, and traces of oxygen, carbon(II)
          oxide and water. The mean density of Mars is lower than that of Earth.
          This means that it may have a richer content of the lighter elements
          or a lower nickel-iron content than Earth. Studies indicate that it
          may have a solid Core.
        </NoteText>
        <SubTopic>Jupiter</SubTopic>
        <NoteText>
          <ItalicText>Jupiter,</ItalicText> the largest of the nine planets, has
          a diameter that is more than eleven times the size of Earth. Its mass
          is 318 times that of Earth. hence it has al enormous gravitational
          pull. However, the rnass of Jupiter is small compared to its size.
          This is because Jupiter is composed mainly of hydrogen. The hydrogen
          exists as a gas in its thick atmosphere and probably as a liquid
          underneath the atmosphere. The next most abundant substance is helium.
          followed by methane, ammonia and other simple molecules.
        </NoteText>
        <NoteText>
          Jupiter has belts of colourful clouds in its atmosphere. The clearly
          visible Great Red Spot is now known to be a huge hurricane that has
          been blowing for years. Jupiter also has a faint ring system composed
          of dark sand grains and dust.
        </NoteText>
        <NoteText>
          Jupiter gives off a lot more heat than it receives from the Sun. This
          indicates an intensely hot and active core. Jupiter's mean surface
          temperature is around -140°C, although the temperature at its core is
          estimated to be about 30000°C. Jupiter has 16 moons. Io, one of its
          large moons, has eight active volcanoes.
        </NoteText>
        <SubTopic>Saturn</SubTopic>
        <NoteText>
          <ItalicText>Saturn</ItalicText> is the second largest planet in the
          Solar System. It is a very cold planet with a surface temperature of
          about -182 °C. It has an atmosphere of mainly hydrogen and helium with
          traces of ammonia and methane. Saturn is one of the least dense
          planets despite a rocky core slightly bigger than Earth. A series of
          cloud belts surround the planet. These are similar to but paler than
          those of Jupiter.
        </NoteText>
        <NoteText>
          Saturn, encircled by its series of rings, is one of the most beautiful
          planets in the Solar System. There are seven large distinct rings. The
          rings are made up of thousands of separate ringlets and dark grooves.
          These ringlets consist of rocks, dust and lumps of ice of various
          sizes. Most of the ringlets are about a few hundred metres thick.
        </NoteText>
        <NoteText>
          Saturn has many moons. To date 20 have been recorded.
        </NoteText>
        <SubTopic>Uranus</SubTopic>
        <NoteText>
          <ItalicText>Uranus</ItalicText> is a very cold planet as it receives
          only s as much sunlight as Earth. Uranus is an unusual planet becausc
          its axis of rotation is tilted sideways until it IS almost horizontal.
        </NoteText>
        <NoteText>
          Uranus' atmosphere is madc up of mainly hydrogen and helium with
          traces of methane, ammonia ahd water. However. it is so cold that all
          the last three Compounds probably form a frozen mixture. The maximum
          surface temperature of the planet is about -185°C. The planet probably
          has a solid core Surrounded by ice and liquid hydrogen.
        </NoteText>
        <NoteText>
          Uranus has 15 moons to date. It also has ten narrow, black rings made
          up of dark "boulders".
        </NoteText>
        <SubTopic>Neptune</SubTopic>
        <NoteText>
          Neptune is about the same size as Uranus. It has a thick storny
          atmosphere of hydrogen and helium with white clouds of frozen methane
          around the equatorial region. Its Great Dark Spot is a huge hurricane
          about the size of Earth. It is also encircled by five narrow rings.
          Neptune is very cold with a temperature of -205 °C. It may have a
          solid core surrounded by a thick layer of ice.
        </NoteText>
        <NoteText>
          Triton, one of its moons, is volcanic with a temperature of -240 °C,
          the coldest recorded for any of the bodies in the Solar System.
        </NoteText>
        <SubTopic>Pluto</SubTopic>
        <NoteText>
          Pluto is the smallest planet as well as the farthest from the Sun.
          Pluto probably has a surface temperature of about -220°C on the sunlit
          region, and about -253 °C on the dark side. All substances would have
          been liquefied or frozen at this temperature. Its body probably
          contains a large amount of solid methane.
        </NoteText>
        <NoteText>/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\</NoteText>
        <SubTopic>Asteroids, Comets and Meteoroids</SubTopic>
        <NoteText>
          <HighlightText>Asteroids</HighlightText> These are small rocky bodics,
          usually found between Mars and Jupiter. This region is known as the
          "asteroid belt". There are thousands of asteroids of varying sizes.
          They could be the remains of heavenly bodies that broke up long ago.
          Most asteroids move along circular orbits. Asteroids are rich in
          elements similar to those on Earth. Efforts are being made to tap
          these mineral resources to sustain industries on Earth.
        </NoteText>
        <NoteText>
          <HighlightText>Comets</HighlightText> These are frozen collections of
          ice, dust and gases which move in elongatcd, irrcgular orbits around
          the Sun. Far from the Sun, a comet consists of a small body (or a
          collection of small bodies) which reflects sunlight and is called the
          nucleus The nucleus is composed of compounds such as frozen water,
          ammonia, methane, and other heavier hydrocarbons. As the comet
          approaches the Sun it becomes heated, melts and the compounds int
          dissociate to produce a cloud of gaseous molecules. atoms and ions
          which shroud the nucleus, The doud, together with the nucleus, forms
          the head of the comet. When dose to the Sun, a bright tail (which may
          be long) may develop. This tail always points away from the Sun
          because of the solar wind, which is a stream of energetic ions and
          electrons from the Sun.
        </NoteText>
        <NoteText>
          A comet may make only one appearance or it may appear regularly. A
          spectacular comet, the Halley' comet, is seen every 76 years. It was
          last seen in 1986.
        </NoteText>
        <NoteText>
          <HighlightText>Meteoroids</HighlightText> These are small fragments of
          stone flying through space at very high speeds. They are usually the
          remains of comets and asteroids. Millions of meteoroids travel around
          the Sun. When the meteoroids enter our atmosphere, they are known as
          meteors. They travel at great speeds and the air friction heats them
          up. They glow and disintegrate. forming a bright fash of light, known
          as a shooting star. Occasionally. pieces of meteors land on Earth.
          These are called meteorites. A large meteorite can. cause a big crater
          if it falls on land. Meteorites are composed of many elements, such as
          iron, magnesium. sodium, calcium, aluminium, nickel, silicon and
          hydrogen, found on Earth. Spectroscopy of meteors also shows a similar
          composition.
        </NoteText>
        <SubTopic>STARS</SubTopic>
        <NoteText>
          Stars are self-lumninous objects, shining by radiation obtained from
          energy sources within themselves (by nuclear fusion). By contrast,
          planets shine by reflected light. Stars vary in age, size,
          temperature, luminosity (brightness), colour and chemical composition.
          The Sun is a typical star
        </NoteText>
        <SubTopic>Classification of Stars</SubTopic>
        <NoteText>
          Stars are grouped according to their spectra, which give information
          on their temperature, luminosity and chemical composition. These
          spectral classes are given the letters O. B, A, F G, K and M. They are
          arranged in order of decreasing temperature, from the hottest to the
          coolest stars. Stars in classes O to M are said to belong to the main
          sequence group. Other stellar classes which are outside the main
          sequence include the C stars and the S stars, which are the giants and
          the supergiants, and the white dwarfs.
        </NoteText>
        <NoteText>
          The stars in the main sequence have essentially the same chemical
          composition but their surface temperatures and atmospheric pressures
          are different. In addition, these stars also show a colour sequence-
          from the very hot (20000°C) bluish-white O and B stars, to the
          moderately hot (6000 °C) yellow G stars, to the the cool (3000 °C) red
          K and M stars.
        </NoteText>
        <NoteText>
          Like the Sun, the stars in classes O to M are composed mainly of
          hydrogen, helium and small amounts of other elements found on Earth.
          However, stellar spectra show that the particulate nature of these
          elements varies with the temperature of the stars.
        </NoteText>
        <NoteText>
          In cool stars, simple molecules and neutral atoms of elements are
          abundant, while in hot stars highly ionized atoms of elements
          predorninate. Thus, spectra of the cool stars of class M show the
          presence of simple molecules like titanium oxide and neutral atoms of
          metals like iron, calciurn and magnesium.
        </NoteText>
        <NoteText>
          The spectra of the slightly hotter K stars show that molecules like
          titanium oxide are not present although stable pieces of molecules
          like the hydroxyl radical are present.
        </NoteText>
        <NoteText>
          The spectra of the G stars are characterized by emission lines showing
          the presence of ionized atoms of metals like iron and calcium.
        </NoteText>
        <NoteText>
          The spectra of F stars indicate the presence of more ionized metal
          atoms than neutral atoms. Class A stars have spectra showing strong
          hydrogen emission lines (indicating unionized hydrogen atoms), while
          in the spectra of class B stars, these lines are faint indicating that
          most of the hydrogen atoms are ionized.
        </NoteText>
        <NoteText>
          The spectra of the very hot O stars show that even helium atoms are
          ionized, while oxygen, nitrogen and carbon are doubly ionized.
        </NoteText>
        <SubTopic>Life History of Stars</SubTopic>
        <NoteText>
          Stars are formed from massive clouds of dust and gas (mainly hydrogen)
          that are found in space. The particles in a cloud are attracted to one
          another by the force of gravity. As millions of particles come
          together, the cloud shrinks, its density increases and heat is
          generated. As the temperature at the core increases to over I000000
          °C, nuclear fusion reactions begin. Vast amounts of energy are
          released and a glowing ball of gas appears, marking the birth of a
          star.
        </NoteText>
        <NoteText>
          Most stars are formed in this way but their life histories vary
          according to their sizes at birth. The small stars live the longest:
          the medium-sized stars live for about 10000 million years; while large
          starS live for about a few million years.
        </NoteText>
        <NoteText>
          A star that is small at birth does not produce much energy. Its size
          or brightness does not change appreciably during its lifetime and it
          fades away when its store of hydrogen is used up.
        </NoteText>
        <NoteText>
          A medium-sized star is very bright when young. The hydrogen atoms at
          its core fuse to form helium thereby liberating a large amount of
          energy. It cools slightly and enters its middle age, which is its most
          active period. As the hydrogen at its core is used up, the hydrogen in
          the outer layer (shell) of the star undergoes fusion reaction. This
          causes the star to expand into a luminous red giant. Meanwhile, the
          core contracts, becomes denser and the temperature starts to increase.
          At about 100000000°C. the helium nuclei begin to fuse to form the
          nuclei of heavier elements like carbon- 1 2, oxygen-16, neon-20 and
          magnesium-24 in reactions similar to the following:
        </NoteText>
        <Image
          style={styles.textSnapImage}
          source={require("../../../assets/galaxies/textsnap.jpg")}
        />
        <NoteText>
          These reactions stop when the store of helium in the core is used up.
          The outer layer or shell of the star usually drits away to leave a
          small star, the white dwarf (the core), which cools and fades away
          eventually
        </NoteText>
        <NoteText>
          A star that is large at birth produces much larger amounts of energy
          than the medium-sized star. Such a star often becomes a supergiant.
          When the hydrogen and helium in its core are used up in fusion
          reactions, the nuclei of heavier elements like carbon- 12 undergo
          fusion to form much heavier elements such as sodium. This happens at
          temperatures of about 700000000 °C. At higher temperatures than this,
          the nuclei of the transition group of elements (such as nickel,
          chromium, manganese and cobalt) are formed. If the temperature
          continues to rise, the nuclei of the transition group of elements tend
          to break down to helium nuclei in processes which use up enormous
          amounts of energy. The star collapses suddenly and explodes as a
          supernova. During this explosion, many types of nuclear reactions
          occur. A supernova is a rare phenomenon. If sufficient mass is left
          behind after the explosion, a white dwarf may form.
        </NoteText>
        <SubTopic>The Sun</SubTopic>
        <NoteText>
          The Sun was born as an average-sized star and probably will have a
          life span of about ten billion years. It is now a yellow G star which
          is in its middle age. It will slowly expand to form a red giant which
          may extend up to Earth. Then it will become a white dwarf when its
          shell drifts away. This marks the beginning of the end of its life as
          it slowly cools and fades into a cold black dwarf.
        </NoteText>
        <SubTopic>Light years</SubTopic>
        <NoteText>
          Astronomers measure stellar distances by light years. One light year
          is the distance travelled by light in one year, i.e, about 9.24 x 10!5
          m. So when we look into space to see a star, we are really looking
          back in time. Most of the starlight we see started on its journey a
          long long time ago. For example, light from Sirius (the brightest
          star) takes 87 years to travel to us on Earth. Light from our star,
          the Sun, takes only 8 minutes to reach us.
        </NoteText>
        <SubTopic>SPACE TRAVEL</SubTopic>
        <NoteText>
          On October 4, 1957 Russian scientists and engineers shook the world by
          placing into orbit the first man- made satellite, Sputnik 1. Sputnik 1
          had a mass of 82.8 kg and a diameter of 0.58 m. The polished aluminium
          sphere orbited Earth at heights ranging from 228 km to 946 km for 92
          days, completing a total of 1400 orbits.
        </NoteText>
        <NoteText>
          No sooner had the world recovered from the excitement of this first
          achievement than it was again shaken by the launching of Sputnik 2 on
          November 3, 1957. Sputnik 2 weighed 508.5 kg and carried a Iiving
          animal, a husky dog named Laika.
        </NoteText>
        <NoteText>
          Since the early launchings, many types of artificial Earth satell ites
          have been successfully placed in orbit. These include weather
          satellites, Earth satellites, communications satel lites, and
          scientifñc and astronomical satellites.
        </NoteText>
        <NoteText>
          In April 1961, the first man, Yuri Gagarin was launched into space. He
          orbited Earth for 108 minutes and returned safely to Earth.
        </NoteText>
        <NoteText>
          Advances made in radio, telemetering and television made it possible
          to guide unmanned spacecraft. It also enabled the transmission of all
          kinds of scientific data and pictures to ground stations. Thus, many
          unmanned spacecraft were sent out to study the planets in the Solar
          System. These probes include the Mariners and Vikings (to study
          Mercury,Mars and Venus), and the Pioneers and the Voyagers (to study
          the outer planets),
        </NoteText>
        <NoteText>
          To send a manned flight to the Moon, the problems of excessive
          acceleration, weightlessness, radiation in space and re-entry into
          Earth's atmosphere had to be solved. Finally, in July 1969, Apollo 11
          astronauts Neil Armstrong and Edwin Aldrin landed on the Moon. Later,
          in November 1969, Charles Conrad and Alan Bean landed the Apollo 12
          lunar module on the Moon.
        </NoteText>
        <NoteText>
          Manned space stations circling Earth are fast becoming a reality after
          the launching of the first space shuttle, Columbia, in 1981. In 1984,
          two astronauts walked in space using a manned manoeuvring unit (MMU)
          without a life line and repaired a disabled satellite. Many activities
          can .now be carried out in space.
        </NoteText>
        <NoteText>
          Scientists are working towards landing astronauts on Mars. However,
          any predictions about trips to Mars and other planets would be purely
          speculative at present. One has to wait and see what the future holds
          but it would certainly be most exciting.
        </NoteText>
      </View>
    </View>
  );
};

export default ChemistryOfEarth;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  overallTopic: {
    marginHorizontal: "auto",
    fontSize: 40,
    fontWeight: "900",
    backgroundColor: "gold",
    paddingHorizontal: 30,
    borderRadius: 10,
    width: "100%",
    textAlignVertical: "center",
    paddingVertical: 10,
  },
  subTopic: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  note: {
    fontFamily: "serif",
    fontWeight: "600",
    fontSize: 17,
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    lineHeight: 30,
  },
  highlightTextInNote: {
    fontFamily: "serif",
    fontWeight: "900",
    fontSize: 18,
    marginVertical: 10,
  },
  list: {
    fontWeight: "400",
    fontSize: 17,
    marginVertical: 1,
    marginHorizontal: 20,
    lineHeight: 28,
  },
  italicText: {
    fontFamily: "serif",
    // fontWeight: "900",
    fontSize: 18,
    marginVertical: 10,
    fontStyle: "italic",
  },
  superText: {
    fontSize: 10,
    verticalAlign: "top",
    fontWeight: "700",
    textAlignVertical: "top",
  },
  textSnapImage: {
    width: "100%",
    height: 250,
    margin: 2
  }
});

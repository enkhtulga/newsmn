import React from "react";
import { Box } from "@material-ui/core";
import StickySidebar from "../../components/StickySidebar";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../theme/colors";
import NTitle from "../../components/Title";

const HomeContainer = () => {
  const classes = useStyles();

  return (
    <Box>
      <section className={classes.sectionTop}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit
        erat nulla, vel volutpat dolor gravida faucibus. Sed a eros quis risus
        eleifend auctor nec sed mauris. In bibendum suscipit scelerisque. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Sed in mollis sapien. Sed vel risus sapien. Nullam
        nisl ligula, dignissim ut molestie vel, viverra at dui. Mauris sed elit
        finibus, rhoncus eros et, tempus mi. Maecenas et libero at ante
        ultricies lacinia ut eu ligula. Nulla lorem felis, suscipit id ligula
        eget, imperdiet rutrum leo. Nam rhoncus pretium pellentesque. Cras eu
        sollicitudin libero. Vivamus vel eleifend lacus. Cras at malesuada
      </section>
      <section className={classes.sectionWrap}>
        <StickySidebar
          className={classes.stickySidebar}
          offsetTop={10}
          offsetBottom={0}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          hendrerit erat nulla, vel volutpat dolor gravida faucibus. Sed a eros
          quis risus eleifend auctor nec sed mauris. In bibendum suscipit
          scelerisque. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Sed in mollis sapien. Sed vel
          risus sapien. Nullam nisl ligula, dignissim ut molestie vel, viverra
          at dui. Mauris sed elit finibus, rhoncus eros et, tempus mi. Maecenas
          et libero at ante ultricies lacinia ut eu ligula. Nulla lorem felis,
          suscipit id ligula eget, imperdiet rutrum leo. Nam rhoncus pretium
          pellentesque. Cras eu sollicitudin libero. Vivamus vel eleifend lacus.
          Cras at malesuada
        </StickySidebar>
        <Box className={classes.contentTop}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          hendrerit erat nulla, vel volutpat dolor gravida faucibus. Sed a eros
          quis risus eleifend auctor nec sed mauris. In bibendum suscipit
          scelerisque. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Sed in mollis sapien. Sed vel
          risus sapien. Nullam nisl ligula, dignissim ut molestie vel, viverra
          at dui. Mauris sed elit finibus, rhoncus eros et, tempus mi. Maecenas
          et libero at ante ultricies lacinia ut eu ligula. Nulla lorem felis,
          suscipit id ligula eget, imperdiet rutrum leo. Nam rhoncus pretium
          pellentesque. Cras eu sollicitudin libero. Vivamus vel eleifend lacus.
          Cras at malesuada lectus. Donec sit amet posuere est. Nulla egestas
          dolor sem, nec gravida erat luctus eget. Integer quis nibh sed libero
          ultrices tristique nec ut felis. Quisque vulputate rutrum ex, eget
          blandit metus varius a. Phasellus mollis vel mi vel tempus. In eget
          massa aliquam, iaculis felis id, dignissim dui. Duis tempus eget metus
          sit amet rhoncus. Nulla ut lectus est. Vivamus lobortis ligula sit
          amet mauris sagittis commodo. Aliquam velit nisi, consectetur a
          venenatis in, rutrum vel diam. Nunc tempor dignissim iaculis. Nulla
          egestas convallis ullamcorper. Sed augue lorem, tincidunt at finibus
          porta, luctus vel risus. Duis fermentum quis lectus et fermentum.
          Praesent a interdum ante, in ullamcorper orci. Pellentesque commodo
          vulputate ante, in vestibulum neque porttitor vel. Integer faucibus mi
          vel neque pretium euismod. Ut nec nibh aliquet, lobortis ligula
          interdum, luctus elit. Nam euismod rutrum quam ut rhoncus.
          Pellentesque suscipit metus et commodo congue. Praesent vel dictum
          ante, in scelerisque arcu. Morbi sollicitudin ex in libero pulvinar
          feugiat. Nunc vitae rhoncus risus, non sollicitudin erat. Nunc
          volutpat, mauris eget mollis porttitor, nunc justo pellentesque
          turpis, a varius neque enim non dui. Suspendisse potenti. Integer
          fermentum justo aliquam, sagittis leo sit amet, tincidunt risus. In
          ultrices felis nec dui sodales tincidunt. Sed accumsan, ligula
          tristique tempus viverra, eros lacus rutrum arcu, vel sodales leo
          justo non eros. Donec sed commodo turpis. Vestibulum id pharetra
          libero. Sed rutrum feugiat arcu, at luctus massa mollis bibendum.
          Praesent sit amet nisi elit. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nam semper nulla enim, sed ultrices tortor egestas
          id. Cras ac lectus at risus facilisis ornare. Nulla blandit bibendum
          risus. Sed tincidunt libero nisi, sed placerat enim vehicula sed.
          Integer id nunc eleifend velit congue ullamcorper. Maecenas sagittis
          condimentum enim vel pulvinar. Cras et purus non velit euismod
          sagittis. Etiam ullamcorper felis quis diam lacinia, in molestie
          lectus feugiat. Nunc condimentum venenatis cursus. In suscipit quam
          nec iaculis pellentesque. Aenean sed aliquet felis, a molestie felis.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          hendrerit erat nulla, vel volutpat dolor gravida faucibus. Sed a eros
          quis risus eleifend auctor nec sed mauris. In bibendum suscipit
          scelerisque. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Sed in mollis sapien. Sed vel
          risus sapien. Nullam nisl ligula, dignissim ut molestie vel, viverra
          at dui. Mauris sed elit finibus, rhoncus eros et, tempus mi. Maecenas
          et libero at ante ultricies lacinia ut eu ligula. Nulla lorem felis,
          suscipit id ligula eget, imperdiet rutrum leo. Nam rhoncus pretium
          pellentesque. Cras eu sollicitudin libero. Vivamus vel eleifend lacus.
          Cras at malesuada lectus. Donec sit amet posuere est. Nulla egestas
          dolor sem, nec gravida erat luctus eget. Integer quis nibh sed libero
          ultrices tristique nec ut felis. Quisque vulputate rutrum ex, eget
          blandit metus varius a. Phasellus mollis vel mi vel tempus. In eget
          massa aliquam, iaculis felis id, dignissim dui. Duis tempus eget metus
          sit amet rhoncus. Nulla ut lectus est. Vivamus lobortis ligula sit
          amet mauris sagittis commodo. Aliquam velit nisi, consectetur a
          venenatis in, rutrum vel diam. Nunc tempor dignissim iaculis. Nulla
          egestas convallis ullamcorper. Sed augue lorem, tincidunt at finibus
          porta, luctus vel risus. Duis fermentum quis lectus et fermentum.
          Praesent a interdum ante, in ullamcorper orci. Pellentesque commodo
          vulputate ante, in vestibulum neque porttitor vel. Integer faucibus mi
          vel neque pretium euismod. Ut nec nibh aliquet, lobortis ligula
          interdum, luctus elit. Nam euismod rutrum quam ut rhoncus.
          Pellentesque suscipit metus et commodo congue. Praesent vel dictum
          ante, in scelerisque arcu. Morbi sollicitudin ex in libero pulvinar
          feugiat. Nunc vitae rhoncus risus, non sollicitudin erat. Nunc
          volutpat, mauris eget mollis porttitor, nunc justo pellentesque
          turpis, a varius neque enim non dui. Suspendisse potenti. Integer
          fermentum justo aliquam, sagittis leo sit amet, tincidunt risus. In
          ultrices felis nec dui sodales tincidunt. Sed accumsan, ligula
          tristique tempus viverra, eros lacus rutrum arcu, vel sodales leo
          justo non eros. Donec sed commodo turpis. Vestibulum id pharetra
          libero. Sed rutrum feugiat arcu, at luctus massa mollis bibendum.
          Praesent sit amet nisi elit. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nam semper nulla enim, sed ultrices tortor egestas
          id. Cras ac lectus at risus facilisis ornare. Nulla blandit bibendum
          risus. Sed tincidunt libero nisi, sed placerat enim vehicula sed.
          Integer id nunc eleifend velit congue ullamcorper. Maecenas sagittis
          condimentum enim vel pulvinar. Cras et purus non velit euismod
          sagittis. Etiam ullamcorper felis quis diam lacinia, in molestie
          lectus feugiat. Nunc condimentum venenatis cursus. In suscipit quam
          nec iaculis pellentesque. Aenean sed aliquet felis, a molestie felis.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          hendrerit erat nulla, vel volutpat dolor gravida faucibus. Sed a eros
          quis risus eleifend auctor nec sed mauris. In bibendum suscipit
          scelerisque. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Sed in mollis sapien. Sed vel
          risus sapien. Nullam nisl ligula, dignissim ut molestie vel, viverra
          at dui. Mauris sed elit finibus, rhoncus eros et, tempus mi. Maecenas
          et libero at ante ultricies lacinia ut eu ligula. Nulla lorem felis,
          suscipit id ligula eget, imperdiet rutrum leo. Nam rhoncus pretium
          pellentesque. Cras eu sollicitudin libero. Vivamus vel eleifend lacus.
          Cras at malesuada lectus. Donec sit amet posuere est. Nulla egestas
          dolor sem, nec gravida erat luctus eget. Integer quis nibh sed libero
          ultrices tristique nec ut felis. Quisque vulputate rutrum ex, eget
          blandit metus varius a. Phasellus mollis vel mi vel tempus. In eget
          massa aliquam, iaculis felis id, dignissim dui. Duis tempus eget metus
          sit amet rhoncus. Nulla ut lectus est. Vivamus lobortis ligula sit
          amet mauris sagittis commodo. Aliquam velit nisi, consectetur a
          venenatis in, rutrum vel diam. Nunc tempor dignissim iaculis. Nulla
          egestas convallis ullamcorper. Sed augue lorem, tincidunt at finibus
          porta, luctus vel risus. Duis fermentum quis lectus et fermentum.
          Praesent a interdum ante, in ullamcorper orci. Pellentesque commodo
          vulputate ante, in vestibulum neque porttitor vel. Integer faucibus mi
          vel neque pretium euismod. Ut nec nibh aliquet, lobortis ligula
          interdum, luctus elit. Nam euismod rutrum quam ut rhoncus.
          Pellentesque suscipit metus et commodo congue. Praesent vel dictum
          ante, in scelerisque arcu. Morbi sollicitudin ex in libero pulvinar
          feugiat. Nunc vitae rhoncus risus, non sollicitudin erat. Nunc
          volutpat, mauris eget mollis porttitor, nunc justo pellentesque
          turpis, a varius neque enim non dui. Suspendisse potenti. Integer
          fermentum justo aliquam, sagittis leo sit amet, tincidunt risus. In
          ultrices felis nec dui sodales tincidunt. Sed accumsan, ligula
          tristique tempus viverra, eros lacus rutrum arcu, vel sodales leo
          justo non eros. Donec sed commodo turpis. Vestibulum id pharetra
          libero. Sed rutrum feugiat arcu, at luctus massa mollis bibendum.
          Praesent sit amet nisi elit. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nam semper nulla enim, sed ultrices tortor egestas
          id. Cras ac lectus at risus facilisis ornare. Nulla blandit bibendum
          risus. Sed tincidunt libero nisi, sed placerat enim vehicula sed.
          Integer id nunc eleifend velit congue ullamcorper. Maecenas sagittis
          condimentum enim vel pulvinar. Cras et purus non velit euismod
          sagittis. Etiam ullamcorper felis quis diam lacinia, in molestie
          lectus feugiat. Nunc condimentum venenatis cursus. In suscipit quam
          nec iaculis pellentesque. Aenean sed aliquet felis, a molestie felis.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          hendrerit erat nulla, vel volutpat dolor gravida faucibus. Sed a eros
          quis risus eleifend auctor nec sed mauris. In bibendum suscipit
          scelerisque. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Sed in mollis sapien. Sed vel
          risus sapien. Nullam nisl ligula, dignissim ut molestie vel, viverra
          at dui. Mauris sed elit finibus, rhoncus eros et, tempus mi. Maecenas
          et libero at ante ultricies lacinia ut eu ligula. Nulla lorem felis,
          suscipit id ligula eget, imperdiet rutrum leo. Nam rhoncus pretium
          pellentesque. Cras eu sollicitudin libero. Vivamus vel eleifend lacus.
          Cras at malesuada lectus. Donec sit amet posuere est. Nulla egestas
          dolor sem, nec gravida erat luctus eget. Integer quis nibh sed libero
          ultrices tristique nec ut felis. Quisque vulputate rutrum ex, eget
          blandit metus varius a. Phasellus mollis vel mi vel tempus. In eget
          massa aliquam, iaculis felis id, dignissim dui. Duis tempus eget metus
          sit amet rhoncus. Nulla ut lectus est. Vivamus lobortis ligula sit
          amet mauris sagittis commodo. Aliquam velit nisi, consectetur a
          venenatis in, rutrum vel diam. Nunc tempor dignissim iaculis. Nulla
          egestas convallis ullamcorper. Sed augue lorem, tincidunt at finibus
          porta, luctus vel risus. Duis fermentum quis lectus et fermentum.
          Praesent a interdum ante, in ullamcorper orci. Pellentesque commodo
          vulputate ante, in vestibulum neque porttitor vel. Integer faucibus mi
          vel neque pretium euismod. Ut nec nibh aliquet, lobortis ligula
          interdum, luctus elit. Nam euismod rutrum quam ut rhoncus.
          Pellentesque suscipit metus et commodo congue. Praesent vel dictum
          ante, in scelerisque arcu. Morbi sollicitudin ex in libero pulvinar
          feugiat. Nunc vitae rhoncus risus, non sollicitudin erat. Nunc
          volutpat, mauris eget mollis porttitor, nunc justo pellentesque
          turpis, a varius neque enim non dui. Suspendisse potenti. Integer
          fermentum justo aliquam, sagittis leo sit amet, tincidunt risus. In
          ultrices felis nec dui sodales tincidunt. Sed accumsan, ligula
          tristique tempus viverra, eros lacus rutrum arcu, vel sodales leo
          justo non eros. Donec sed commodo turpis. Vestibulum id pharetra
          libero. Sed rutrum feugiat arcu, at luctus massa mollis bibendum.
          Praesent sit amet nisi elit. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nam semper nulla enim, sed ultrices tortor egestas
          id. Cras ac lectus at risus facilisis ornare. Nulla blandit bibendum
          risus. Sed tincidunt libero nisi, sed placerat enim vehicula sed.
          Integer id nunc eleifend velit congue ullamcorper. Maecenas sagittis
          condimentum enim vel pulvinar. Cras et purus non velit euismod
          sagittis. Etiam ullamcorper felis quis diam lacinia, in molestie
          lectus feugiat. Nunc condimentum venenatis cursus. In suscipit quam
          nec iaculis pellentesque. Aenean sed aliquet felis, a molestie felis.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          hendrerit erat nulla, vel volutpat dolor gravida faucibus. Sed a eros
          quis risus eleifend auctor nec sed mauris. In bibendum suscipit
          scelerisque. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Sed in mollis sapien. Sed vel
          risus sapien. Nullam nisl ligula, dignissim ut molestie vel, viverra
          at dui. Mauris sed elit finibus, rhoncus eros et, tempus mi. Maecenas
          et libero at ante ultricies lacinia ut eu ligula. Nulla lorem felis,
          suscipit id ligula eget, imperdiet rutrum leo. Nam rhoncus pretium
          pellentesque. Cras eu sollicitudin libero. Vivamus vel eleifend lacus.
          Cras at malesuada lectus. Donec sit amet posuere est. Nulla egestas
          dolor sem, nec gravida erat luctus eget. Integer quis nibh sed libero
          ultrices tristique nec ut felis. Quisque vulputate rutrum ex, eget
          blandit metus varius a. Phasellus mollis vel mi vel tempus. In eget
          massa aliquam, iaculis felis id, dignissim dui. Duis tempus eget metus
          sit amet rhoncus. Nulla ut lectus est. Vivamus lobortis ligula sit
          amet mauris sagittis commodo. Aliquam velit nisi, consectetur a
          venenatis in, rutrum vel diam. Nunc tempor dignissim iaculis. Nulla
          egestas convallis ullamcorper. Sed augue lorem, tincidunt at finibus
          porta, luctus vel risus. Duis fermentum quis lectus et fermentum.
          Praesent a interdum ante, in ullamcorper orci. Pellentesque commodo
          vulputate ante, in vestibulum neque porttitor vel. Integer faucibus mi
          vel neque pretium euismod. Ut nec nibh aliquet, lobortis ligula
          interdum, luctus elit. Nam euismod rutrum quam ut rhoncus.
          Pellentesque suscipit metus et commodo congue. Praesent vel dictum
          ante, in scelerisque arcu. Morbi sollicitudin ex in libero pulvinar
          feugiat. Nunc vitae rhoncus risus, non sollicitudin erat. Nunc
          volutpat, mauris eget mollis porttitor, nunc justo pellentesque
          turpis, a varius neque enim non dui. Suspendisse potenti. Integer
          fermentum justo aliquam, sagittis leo sit amet, tincidunt risus. In
          ultrices felis nec dui sodales tincidunt. Sed accumsan, ligula
          tristique tempus viverra, eros lacus rutrum arcu, vel sodales leo
          justo non eros. Donec sed commodo turpis. Vestibulum id pharetra
          libero. Sed rutrum feugiat arcu, at luctus massa mollis bibendum.
          Praesent sit amet nisi elit. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nam semper nulla enim, sed ultrices tortor egestas
          id. Cras ac lectus at risus facilisis ornare. Nulla blandit bibendum
          risus. Sed tincidunt libero nisi, sed placerat enim vehicula sed.
          Integer id nunc eleifend velit congue ullamcorper. Maecenas sagittis
          condimentum enim vel pulvinar. Cras et purus non velit euismod
          sagittis. Etiam ullamcorper felis quis diam lacinia, in molestie
          lectus feugiat. Nunc condimentum venenatis cursus. In suscipit quam
          nec iaculis pellentesque. Aenean sed aliquet felis, a molestie felis.
        </Box>
      </section>
      <section className={classes.sectionBottom}>
        <NTitle title="Онлайн худалдаа"></NTitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit
        erat nulla, vel volutpat dolor gravida faucibus. Sed a eros quis risus
        eleifend auctor nec sed mauris. In bibendum suscipit scelerisque. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Sed in mollis sapien. Sed vel risus sapien. Nullam
        nisl ligula, dignissim ut molestie vel, viverra at dui. Mauris sed elit
        finibus, rhoncus eros et, tempus mi. Maecenas et libero at ante
        ultricies lacinia ut eu ligula. Nulla lorem felis, suscipit id ligula
        eget, imperdiet rutrum leo. Nam rhoncus pretium pellentesque. Cras eu
        sollicitudin libero. Vivamus vel eleifend lacus. Cras at malesuada
        lectus. Donec sit amet posuere est. Nulla egestas dolor sem, nec gravida
        erat luctus eget. Integer quis nibh sed libero ultrices tristique nec ut
        felis. Quisque vulputate rutrum ex, eget blandit metus varius a.
        Phasellus mollis vel mi vel tempus. In eget massa aliquam, iaculis felis
        id, dignissim dui. Duis tempus eget metus sit amet rhoncus. Nulla ut
        lectus est. Vivamus lobortis ligula sit amet mauris sagittis commodo.
        Aliquam velit nisi, consectetur a venenatis in, rutrum vel diam. Nunc
        tempor dignissim iaculis. Nulla egestas convallis ullamcorper. Sed augue
        lorem, tincidunt at finibus porta, luctus vel risus. Duis fermentum quis
        lectus et fermentum. Praesent a interdum ante, in ullamcorper orci.
        Pellentesque commodo vulputate ante, in vestibulum neque porttitor vel.
        Integer faucibus mi vel neque pretium euismod. Ut nec nibh aliquet,
        lobortis ligula interdum, luctus elit. Nam euismod rutrum quam ut
        rhoncus. Pellentesque suscipit metus et commodo congue. Praesent vel
        dictum ante, in scelerisque arcu. Morbi sollicitudin ex in libero
        pulvinar feugiat. Nunc vitae rhoncus risus, non sollicitudin erat. Nunc
        volutpat, mauris eget mollis porttitor, nunc justo pellentesque turpis,
        a varius neque enim non dui. Suspendisse potenti. Integer fermentum
        justo aliquam, sagittis leo sit amet, tincidunt risus. In ultrices felis
        nec dui sodales tincidunt. Sed accumsan, ligula tristique tempus
        viverra, eros lacus rutrum arcu, vel sodales leo justo non eros. Donec
        sed commodo turpis. Vestibulum id pharetra libero. Sed rutrum feugiat
        arcu, at luctus massa mollis bibendum. Praesent sit amet nisi elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper
        nulla enim, sed ultrices tortor egestas id. Cras ac lectus at risus
        facilisis ornare. Nulla blandit bibendum risus. Sed tincidunt libero
        nisi, sed placerat enim vehicula sed. Integer id nunc eleifend velit
        congue ullamcorper. Maecenas sagittis condimentum enim vel pulvinar.
        Cras et purus non velit euismod sagittis. Etiam ullamcorper felis quis
        diam lacinia, in molestie lectus feugiat. Nunc condimentum venenatis
        cursus. In suscipit quam nec iaculis pellentesque. Aenean sed aliquet
        felis, a molestie felis.
      </section>
      <section className={classes.sectionBottom}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit
        erat nulla, vel volutpat dolor gravida faucibus. Sed a eros quis risus
        eleifend auctor nec sed mauris. In bibendum suscipit scelerisque. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Sed in mollis sapien. Sed vel risus sapien. Nullam
        nisl ligula, dignissim ut molestie vel, viverra at dui. Mauris sed elit
        finibus, rhoncus eros et, tempus mi. Maecenas et libero at ante
        ultricies lacinia ut eu ligula. Nulla lorem felis, suscipit id ligula
        eget, imperdiet rutrum leo. Nam rhoncus pretium pellentesque. Cras eu
        sollicitudin libero. Vivamus vel eleifend lacus. Cras at malesuada
        lectus. Donec sit amet posuere est. Nulla egestas dolor sem, nec gravida
        erat luctus eget. Integer quis nibh sed libero ultrices tristique nec ut
        felis. Quisque vulputate rutrum ex, eget blandit metus varius a.
        Phasellus mollis vel mi vel tempus. In eget massa aliquam, iaculis felis
        id, dignissim dui. Duis tempus eget metus sit amet rhoncus. Nulla ut
        lectus est. Vivamus lobortis ligula sit amet mauris sagittis commodo.
        Aliquam velit nisi, consectetur a venenatis in, rutrum vel diam. Nunc
        tempor dignissim iaculis. Nulla egestas convallis ullamcorper. Sed augue
        lorem, tincidunt at finibus porta, luctus vel risus. Duis fermentum quis
        lectus et fermentum. Praesent a interdum ante, in ullamcorper orci.
        Pellentesque commodo vulputate ante, in vestibulum neque porttitor vel.
        Integer faucibus mi vel neque pretium euismod. Ut nec nibh aliquet,
        lobortis ligula interdum, luctus elit. Nam euismod rutrum quam ut
        rhoncus. Pellentesque suscipit metus et commodo congue. Praesent vel
        dictum ante, in scelerisque arcu. Morbi sollicitudin ex in libero
        pulvinar feugiat. Nunc vitae rhoncus risus, non sollicitudin erat. Nunc
        volutpat, mauris eget mollis porttitor, nunc justo pellentesque turpis,
        a varius neque enim non dui. Suspendisse potenti. Integer fermentum
        justo aliquam, sagittis leo sit amet, tincidunt risus. In ultrices felis
        nec dui sodales tincidunt. Sed accumsan, ligula tristique tempus
        viverra, eros lacus rutrum arcu, vel sodales leo justo non eros. Donec
        sed commodo turpis. Vestibulum id pharetra libero. Sed rutrum feugiat
        arcu, at luctus massa mollis bibendum. Praesent sit amet nisi elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper
        nulla enim, sed ultrices tortor egestas id. Cras ac lectus at risus
        facilisis ornare. Nulla blandit bibendum risus. Sed tincidunt libero
        nisi, sed placerat enim vehicula sed. Integer id nunc eleifend velit
        congue ullamcorper. Maecenas sagittis condimentum enim vel pulvinar.
        Cras et purus non velit euismod sagittis. Etiam ullamcorper felis quis
        diam lacinia, in molestie lectus feugiat. Nunc condimentum venenatis
        cursus. In suscipit quam nec iaculis pellentesque. Aenean sed aliquet
        felis, a molestie felis.
      </section>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  sectionTop: {
    padding: theme.spacing(2),
    backgroundColor: "#dbdbdb",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  sectionWrap: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  stickySidebar: {
    order: 1,
    width: 340,
    borderLeft: "1px solid",
    borderLeftColor: Colors.border_gray,
    paddingLeft: theme.spacing(4),
  },
  contentTop: {
    width: "calc(100% - 340px)",
    paddingRight: theme.spacing(2),
    // border: "3px solid blue",
  },
  sectionBottom: {
    marginTop: 50,
    height: "100vh",
  },
}));

export default HomeContainer;

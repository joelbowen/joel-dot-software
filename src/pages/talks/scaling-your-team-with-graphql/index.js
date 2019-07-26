import React from 'react'
import Layout from '../../../components/Layout'
import SEO from '../../../components/seo'
import { graphql } from 'gatsby'
import Footer from '../../../components/Footer'
import MailChimpSignupButton from '../../../components/MailChimpSignupButton'

function TalkContent({ data }) {
  return (
    <div>
      <Layout hideNav>
        <SEO
          title="Scaling Your Team with GraphQL: Why Relationships Matter"
          description="Today we’re going to talk about scaling your team with GraphQL, and why relationships matter at all points in the process - both the relationships within your data, and the relationships within your organization and teams. Much of this content comes from my own recent learnings, and specifically from attending GraphQL Conf 2019 which just wrapped up in Berlin."
          imageUrl={`https://joel.software${data.featuredPhoto.publicURL}`}
          keywords={[
            'GraphQL',
            'GraphQL Conf 2019',
            'Scaling with GraphQL',
            'Principles of GraphQL',
            'API Design',
            'Tooling',
          ]}
        />
        <div
          style={{ textAlign: 'center', margin: '0 auto', maxWidth: '750px' }}
        >
          <h1>Scaling Your Team with GraphQL</h1>
          <h2>Why Relationships Matter</h2>
          <div
            style={{
              left: 0,
              width: '100%',
              height: '0',
              position: 'relative',
              paddingBottom: '75%',
              paddingTop: '38px',
            }}
          >
            <iframe
              src="//www.slideshare.net/slideshow/embed_code/key/lSBp6ISg3xmrSP"
              frameBorder="0"
              marginWidth="0"
              marginHeight="0"
              scrolling="no"
              style={{
                border: '1px solid #ccc',
                borderWidth: '1px',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                position: 'absolute',
              }}
              allowFullScreen
              title="Scaling Your Team with GraphQL: Why Relationships Matter"
            />
          </div>
          <div style={{ marginTop: '25px' }}>
            <strong>
              <a
                href="//www.slideshare.net/BowenJoel/scaling-your-team-with-graphql-why-relationships-matter"
                title="Scaling Your Team With GraphQL: Why Relationships Matter"
                target="_blank"
              >
                Scaling Your Team With GraphQL: Why Relationships Matter
              </a>
            </strong>{' '}
            from{' '}
            <strong>
              <a href="//www.slideshare.net/BowenJoel" target="_blank">
                Joel Bowen
              </a>
            </strong>
          </div>
        </div>
        <div style={{ margin: '50px auto', maxWidth: '750px' }}>
          <h2>Transcript</h2>
          <p>
            1. Today we’re going to talk about scaling your team with GraphQL,
            and why relationships matter at all points in the process - both the
            relationships within your data, and the relationships within your
            organization and teams. Much of this content comes from my own
            recent learnings, and specifically from attending GraphQL Conf 2019
            which just wrapped up in Berlin.
          </p>
          <p />
          <p>
            2. I’m Joel, I’m a Senior Software Engineer at Skookum, which is an
            impact focused strategy, design, and development agency in
            Charlotte, NC. You can find me on Twitter @JoelSocialized, or reach
            me at my email hello@joel.software.
          </p>
          <p />
          <p>
            This photo is particularly important to me, and I’d like to take a
            moment to talk about why and the value of conferences. If you’re not
            familiar with the GraphQL Community; on the left is Lee Byron, one
            of three co-creators of GraphQL and recently coronated Chair of the
            GraphQL Foundation governing board. In the center is Sashko
            Stubailo, a long-time contributor to the GraphQL community and
            someone who I personally learned a lot from when I was first getting
            into GraphQL in 2016/2017 while he was at Apollo and posting a lot
            of content on the subject. And lastly, on the right, that’s me. I
            think I’m wearing that shirt right now…
          </p>
          <p />
          <p>
            This photo is important to me not just because of the well known
            people in the front,though that’s an amazing part of going to a
            conference, it’s the people in the background who I recognize from
            the time we spent together during the talks and after-hours at
            biergartens and after parties talking about our work, sharing
            stories, and learning from one another.
          </p>
          <p />
          <p>
            If you’re thinking about going to a conference, do it! Whether or
            not it’s GraphQL Conf, choose one that aligns with your personal
            interests and professional goals and go! Conferences are more than
            just the learnings from the stage, may conferences including GraphQL
            Conf are live-streamed for free and the talks are posted online
            later. You can watch this content at 2x speed in the comfort of your
            own home if your primary goal is learnings from the stage, but I say
            it's much more than that. Go, and build relationships with the
            people you meet there – that is where the true value of a conference
            is found.
          </p>
          <p />
          <p>
            3. So – have you heard about GraphQL? I hope you have, and that’s
            why you’re here right now listening to me share my learnings.{' '}
          </p>
          <p />
          <p>
            4. You may be at any number of points in your GraphQL journey. You
            may be API Creators, Consumers, or just getting familiar with the
            concepts. You may feel confident in your knowledge, or confused by
            the ecosystem. Wherever you’re at, I’d like to start by talking
            about the specification so we can start with some shared concepts
            and understandings.
          </p>
          <p />
          <p>
            5. This comes straight from the open source specification, the
            current working draft available on GitHub and at
            https://graphql.github.io/graphql-spec/.
          </p>
          <p />
          <p>
            If this is enough for you, I’ll take volunteers to give the rest of
            the talk, if not let’s dive in a bit and work through these
            concepts.
          </p>
          <p />
          <p>6. So, what is GraphQL?</p>
          <p />
          <p>
            7. GraphQL is an agreement (hint: relationship) between the client
            and the server
          </p>
          <p />
          <p>8. GraphQL is a query language for APIs</p>
          <p />
          <p>9. GraphQL is not a database query language</p>
          <p />
          <p>10. GraphQL doesn't specify where or how to store your data</p>
          <p />
          <p>
            11. GraphQL doesn't specify how to execute retrieval of your data
            within your various services Certainly “resolvers” are the functions
            that run in order to retrieve data from your various services, but
            the method by which you execute that retrieval within those
            services, or the protocols you use to communicate with them, is
            explicitly not defined by GraphQL.
          </p>
          <p />
          <p>
            12. Still have some questions? Let’s refactor your mind from REST
          </p>
          <p />
          <p>
            13. I’m going to use REST as a framework for further discussion, as
            I am assuming most of you are more familiar with REST as a mental
            model.
          </p>
          <p />
          <p>
            I love this diagram from Lachlan Young, a Software Engineer from
            Australia who spoke at GraphQL Conf and was a delight on and off
            stage.
          </p>
          <p />
          <p>
            The concepts on the left, HTTP methods or verbs for interacting with
            APIs may be more familiar to you - though I remember when I first
            cracked open the 403 pages on RESTful Web APIs from O’Reilly, and
            I’m still uncertain about some of those concepts or when exactly I
            want to use some of these verbs, as you may be also.
          </p>
          <p />
          <p>
            Regardless, if you want to GET data in GraphQL it is called a Query.
            If you want to change data in GraphQL it is called a Mutation. If
            you want to subscribe to the changes of that data, is is called a
            Subscription.
          </p>
          <p />
          <p>14. So, what does this look like?</p>
          <p />
          <p>15. Let’s consider a REST API with the following resources.</p>
          <p />
          <p>
            You have a list of projects, and the ability to look up individual
            projects by their name.
          </p>
          <p />
          <p>
            You also have a list of contributors, and the ability to look up
            contributors based on their id.
          </p>
          <p />
          <p>
            In our example, this is an API with 4 endpoints, and likely more for
            associated data.
          </p>
          <p />
          <p>
            16. In GraphQL this is a single endpoints, and you can do all of the
            previous things through a GET request where you specify entities in
            a query param.
          </p>
          <p />
          <p>
            17. GraphQL servers also use POST which is particularly valuable for
            running multiple operations and mutations with variables. At the end
            of the day, GraphQL APIs are still using HTTP methods GET and POST
            primarily - though you won't find those methods defined in the spec.
          </p>
          <p />
          <p>18. Now you might be wondering, what did you mean by entities?</p>
          <p />
          <p>
            19. Well, one way you may start to defined your entities, and their
            relationships, is through types.
          </p>
          <p />
          <p>
            Here we have the Project type, and it has a Name which is a String,
            a Tagline which is also a string, and n contributors.
          </p>
          <p />
          <p>20. The contributors are our first relationship!</p>
          <p />
          <p>
            21. Now let’s say we wanted to ask for a specific project, which is
            called “GraphQL” and we need the tagline of that project for our
            application.
          </p>
          <p />
          <p>
            You can see here we’re using a query, passing a name, and requesting
            tagline.
          </p>
          <p />
          <p>
            This is defining the shape and content of the data we want to get
            back! It looks a bit like JSON...
          </p>
          <p />
          <p>
            23. What we get back from the server is JSON! And the data is in the
            shape we previously described.
          </p>
          <p />
          <p>
            24. Now we may also want to get a list of contributors to our
            project, and since we defined that relationship previously it’s easy
            to request the data we need by adding contributors, and specifying
            username as the data to return.
          </p>
          <p />
          <p>
            25. Now the JSON that is returned includes contributors and their
            username!
          </p>
          <p />
          <p>26. So, how does this help?</p>
          <p />
          <p>
            27. Likely, request waterfalls are something you’ve experienced
            before, wherein you have to make one request in order to make a
            subsequent request based on the returned data, in order to make
            another request… In GraphQL you can often request all of the data
            you need in a single query.
          </p>
          <p />
          <p>
            Overfetching is when you request data from an endpoint that returns
            the data you need along with data you do not need. Many RESTful
            endpoints work this way - if you want the username, you may have to
            request the whole user object. There was some research that was
            recently made available through Cornell which postulated a
            conversion to GraphQL from REST could reduce total data-field
            requests by 94%, and total data transfers by 99%. You can go read
            the HackerNews post on this research to see how people responded to
            those claims, but what I’d like to leave with you is the sense that
            significant reduction in data retrieval and data transfer can be
            achieved with GraphQL. Data transfer is expensive, both for your
            services, networks, and certainly for you clients on their various
            devices and internet connections.
          </p>
          <p />
          <p>
            Underfetching is when you aren’t able to get what you want from the
            available endpoints, and may have to go to tertiary data sources to
            get related data. You may also be dealing with overfetching of
            superfluous data, even while underfetching by not getting what you
            need from a single source or single request. And certainly, with
            GraphQL you’re getting Type-safety out of the box which allows you
            to reason about the shape of your data, and the content of your
            responses and mutations.
          </p>
          <p />
          <p>
            28. Documentation - this was particularly exciting for me when I
            first began working with GraphQL as I had recently spent a
            significant amount of time documenting API endpoints. Out of the
            gate with GraphQL and features like introspection you’ll get
            documentation. Consumers of your API need to know what data is
            available, and what manipulations are possible. GraphQL Schema gives
            you that data by default. There are also may tools available from
            the community to help you add to the documentation.
          </p>
          <p />
          <p>
            Code generation is one of the holy grails of software engineering -
            not having to software engineer! Given the type-safe quality and
            introspection, you can generate boilerplate code for common
            interactions with your data, so you can direct your focus on
            building edge case data requirement operations instead of common
            CRUD operations.
          </p>
          <p />
          <p>
            Because of GrahQL’s schema definitions, you can also quickly mock
            our data responses for your tests – and since I know we all right
            tests for our code all the time – this is a huge productivity win!
          </p>
          <p />
          <p>
            Last but certainly not least, Query Validation means you can get
            instant feedback on the queries you’re writing well before you send
            them to the server or have to parse an error message. This feature
            comes primarily from the tooling built around GraphQL, but is
            ubiquitous in most implementations.
          </p>
          <p />
          <p>
            29. Just as important as how GraphQL can be helpful, is knowing what
            GraphQL does not natively help with.
          </p>
          <p />
          <p>
            30, 31. Caching, Rate Limiting, Authorization, Load Balancing, CORS,
            Tracing & Analytics, File Uploads...
          </p>
          <p />
          <p>
            You will certainly be able to find guidance on these and other
            topics from the GraphQL community and the many reference
            implementations and open-source tools. However, you won’t find these
            defined in the spec, and you may not find a clear and final answer
            on how to handle these in your specific implementation.
          </p>
          <p />
          <p>32. You might be asking why not?</p>
          <p />
          <p>
            33. In some ways, GraphQL follows the Unix philosophy - this is
            something that Dan Schafer shared at the opening of GraphQL conf.
          </p>
          <p />
          <p>
            34. “There are a lot of questions that [GraphQL] very specifically
            does not answer… that’s because [these questions] were already
            solved by FB in 2012” - Dan Schafer (GraphQL Co-Creator) GraphQL
            before GraphQL — Dan Schafer
          </p>
          <p />
          <p>GraphQL was made to compose with these solutions</p>
          <p />
          <p>
            35. These are still important considerations! You will still have to
            account for these concerns in your implementation, and you will find
            help in the GraphQL ecosystem.{' '}
          </p>
          <p />
          <p>
            36. GraphQL as a spec is “small”, and should remain a thin layer in
            your stack
          </p>
          <p />
          <p>37. What might a GraphQL architecture look like?</p>
          <p />
          <p>
            38. Let’s say you have some clients, mobile and desktop, and a
            database. I know many of you are probably wishing your situation was
            this simple.
          </p>
          <p />
          <p>
            39. If this is your setup, you can just put GraphQL in front of the
            database, and connect directly to your data through resolvers and an
            ORM or even raw database queries.
          </p>
          <p />
          <p>
            40. Or maybe, and more likely, your implementation looks a little
            more like this - where you have microservice(s), database(s), and
            other third party APIs or legacy RESTful APIs you still maintain and
            interface with.
          </p>
          <p />
          <p>
            41. GraphQL can be the gateway to all of these individual services
            and data layers.
          </p>
          <p />
          <p>
            42. GraphQL can be where you DTR, define the relationships, and
            create a single graph of the necessary data for your clients.
          </p>
          <p />
          <p>
            43. So, you want to build a GraphQL API - Let’s talk about
            principles.
          </p>
          <p />
          <p>
            Given that many of you are working in different languages,
            toolchains, implementation constraints, and organizational
            strategies, let’s talk about building a GraphQL API through
            principles - ideals that you and your team can strive for as you
            make decisions and compare these concepts to your individual
            constraints.
          </p>
          <p />
          <p>
            44. We’ll do this by looking at Principled GraphQL, a resource
            shared by the Apollo organization based on their wealth of
            experience building and hosting GraphQL APIs and associated tooling.
          </p>
          <p />
          <p>
            Apollo estimates that their software is used in over 90% of existing
            GraphQL implementations. Whether or not that’s an accurate number,
            Apollo has been around for a long time actively contributing to the
            GraphQL ecosystem, and they have a lot of value to bring to this
            discussion.
          </p>
          <p />
          <p>
            45. One Graph - Your company should have one unified graph, instead
            of multiple graphs created by each team.
          </p>
          <p />
          <p>
            46. Federated Implementation - Though there is only one graph, the
            implementation of that graph should be federated across multiple
            teams.
          </p>
          <p />
          <p>
            47. Track the Schema in a Registry - There should be a single source
            of truth for registering and tracking the graph.
          </p>
          <p />
          <p>
            48. Abstract, Demand-Oriented Schema - The schema should act as an
            abstraction layer that provides flexibility to consumers while
            hiding service implementation details.
          </p>
          <p />
          <p>
            49. Use an Agile Approach to Schema Development - The schema should
            be built incrementally based on actual requirements and evolve
            smoothly over time.
          </p>
          <p />
          <p>
            50. Iteratively Improve Performance - Performance management should
            be a continuous, data-driven process, adapting smoothly to changing
            query loads and service implementations.
          </p>
          <p />
          <p>
            51. Use Graph Metadata to Empower Developers - Developers should be
            equipped with rich awareness of the graph throughout the entire
            development process.
          </p>
          <p />
          <p>
            This one made me chuckle when I first read it, the phrasing is so
            powerful!
          </p>
          <p />
          <p>
            Essentially, ensure your developers can easily access Graph
            information, have good tools and use them.
          </p>
          <p />
          <p>
            52. Access and Demand Control - Grant access to the graph on a
            per-client basis, and manage what and how clients can access it.
          </p>
          <p />
          <p>
            53. Structured Logging - Capture structured logs of all graph
            operations and leverage them as the primary tool for understanding
            graph usage.
          </p>
          <p />
          <p>
            Logging should be one of the first things you consider, not one of
            the last. In order to understand your graph usage and iteratively
            improve performance (Principle #6) you’re going to need this
            information.
          </p>
          <p />
          <p>
            54. Separate the GraphQL Layer from the Service Layer - Adopt a
            layered architecture with data graph functionality broken into a
            separate tier rather than baked into every service.
          </p>
          <p />
          <p>55. The most important thing about GraphQL is...</p>
          <p />
          <p>
            With all of these things in mind, and considering all of the
            benefits of GraphQL - what do you think the most important thing
            about GraphQL is? I have my own opinion, which I will share. But I’d
            like you to consider for a moment what is most impactful for you and
            your team.
          </p>
          <p />
          <p>
            56. I believe the most important thing about GraphQL is the
            schema(.graphql), with this you unlock incredible features and
            potential for you and your teams.
          </p>
          <p />
          <p>57. You will have many data stores and services but one graph</p>
          <p />
          <p>
            58. So with many data stores, you might be asking how will I
            generate this schema?
          </p>
          <p />
          <p>
            59. When you read GraphQL Principle #2, you’ll probably see the
            value in federating the schema authorship as well.
          </p>
          <p />
          <p>
            60. What if I want to distribute my schema authorship across my
            services?
          </p>
          <p />
          <p>61. This. Is. Difficult.</p>
          <p />
          <p>62. This. Is. Confusing.</p>
          <p />
          <p>63. Schema Stitching, Schema Federation,</p>
          <p>GraphQL Gateway, GraphQL Modules,</p>
          <p>Namespaces, Schema Delegation,</p>
          <p>Schema Composition...</p>
          <p />
          <p>
            64. Point-point communication without GraphQL as a requirement can
            be optimized in a way that is free of client constraints and use
            cases
          </p>
          <p />
          <p>
            65. Use cases are the relationship between features and the
            necessary data.
          </p>
          <p />
          <p>
            66. Don’t design your schema based on your services architecture.
          </p>
          <p />
          <p>
            This is something that your API consumers do not need to, or want to
            understand.
          </p>
          <p />
          <p>
            And if you properly abstract your services architecture, you’re free
            to change your services without making your data graph obsolete and
            outdated.
          </p>
          <p />
          <p>
            67. You may be familiar with this pattern originally made famous by
            SoundCloud, Phil Calcado (not at Meetup) recently revisited this
            concept in contrast to GraphQL and found that these concepts are not
            mutually exclusive.
          </p>
          <p />
          <p>
            68. If you do distribute your schema, “stitch” statically, track
            changes.
          </p>
          <p />
          <p>
            I have to take a page from Marc-Andre’s book here (not actually,
            though he is writing a book!) and recommend you not stitch
            dynamically. But ideally, distribute your execution, not your schema
          </p>
          <p />
          <p>
            69. Let your individual service teams work on optimizing their
            domains.
          </p>
          <p />
          <p>
            70. If this is the kind of content that is interesting and useful to
            you and your work, I highly recommend these talks from GraphQL Conf.{' '}
          </p>
          <p />
          <p>71. So, you want to use a GraphQL API. Let’s talk about tools.</p>
          <p />
          <p>72. You’ve got a schema, how do you use it?</p>
          <p />
          <p>
            73. I quite like graphql-cli, an OSS offering form the Prisma OSS
            team.
          </p>
          <p />
          <p>
            74. All you need to do to get started with graphql-cli and your
            project, is to run `graphql init`. The CLI will ask you to answer a
            few questions, and then generate a .graphqlconfig file for you.
          </p>
          <p />
          <p>
            And don’t worry, if your GraphQL API requires something like an
            Authorization header, it’s easy to configure that as well.
          </p>
          <p />
          <p>
            75. Once you have a configuration file, it’s as easy as running
            `graphql get-schema` to hit your API and create a schema.graphql
            file locally in your project.
          </p>
          <p />
          <p>
            With the schema file saved in your project, a whole world of tooling
            and validation will be available to you.
          </p>
          <p />
          <p>
            76. Maybe you’re using VSCode, in which case you may want to try the
            GraphQL extension from Prisma. This extension gives you syntax
            highlighting, validation, go-to definitions, and all sorts of
            productivity wins.
          </p>
          <p />
          <p>
            77. In this example, I’ve asked for a number of fields when creating
            a “Beans” fragment, however the existing type does not have a
            `roastTime` property and i’m getting immediate feedback about that
            at the authorship stage, rather than in a build or runtime error.{' '}
          </p>
          <p />
          <p>
            78. In this example, I’ve tried to run a `createBean` mutation when
            the actual mutation is call `createBeans`, and i’m getting immediate
            feedback and correction recommendations before I ever hit save.
          </p>
          <p />
          <p>
            79. Another great feature available as an easy to install plugin for
            the CLI is graphql-voyager. Voyager allows you to visualize your
            data schema and relationships between types. Rather than spelunking
            into your schema or navigating docs to see what is available, you
            can explore the data types visually and quickly find information on
            data models and operations.
          </p>
          <p />
          <p>
            80. Consider using an IDE like GraphQL Playground which is available
            directly from the CLI by running `graphql playground` as well as a
            desktop app you can install. Using an IDE makes storing query
            variables, browsing docs, testing subscriptions, and more pretty
            simple and fun.
          </p>
          <p />
          <p>
            81. If you’ve spent any time with GraphQL query editing in the
            browser, you might have seen Graphiql before - definitely one of the
            best ways to get familiar with an API and test queries.
          </p>
          <p />
          <p>
            82. My favorite thing about Graphiql, and my favorite way to write a
            query, is the relatively new explorer plugin. In this example I’m
            generating a GraphQL query to the GitHub API by selecting the data I
            want which is displayed as a series of checkboxes and expand menus.
            All you have to do is select the data, even fill out query variables
            and sorting without ever writing a line of code. Validate the
            result, and save the query in your application.
          </p>
          <p />
          <p>
            83. If you’re working on a newer project, you may be in the position
            to choose a graphql client. These are just some of the options
            available.
          </p>
          <p />
          <p>
            Apollo is certainly one of the most popular options, and comes out
            of the gate with things like local caching, and optimistic updates,
            though I have found Apollo client to be a bit verbose at times.
          </p>
          <p />
          <p>
            Relay from facebook is also quite popular if you’re working in
            React, and comes with powerful mocking capabilities and custom
            GraphQL directives.
          </p>
          <p />
          <p>
            If you’re working with AWS AppSync you might find yourself using the
            Amplify client, though it doesn’t have some of the bells and
            whistles of the other options.
          </p>
          <p />
          <p>
            Finally, if you don’t need some of the custom features of these
            other clients or aren’t interested in learning their intricacies,
            try out graphql-relay from Prisma which is a minimal GraphQL client
            that will get you up and running quickly.
          </p>
          <p />
          <p>
            84. Generate mock data! The graphql-cli also is supposed to get a
            graphql-faker plugin soon, which should make generating mock data
            even easier.{' '}
          </p>
          <p />
          <p>85. Generate docs!</p>
          <p />
          <p>
            There are plenty of open source tools to help you generate API
            documentation in addition to the existing schema documentation
            available for GraphQL, check out the awesome-graphql repo on github
            for some options. You can do thinks like generate markdown files or
            choose a hosted solution.
          </p>
          <p />
          <p>86. Consider maximizing your benefits with a type-safe codebase</p>
          <p />
          <p>
            87. For me, one of the big takeaways from GraphQL conf, and prisma
            day which I also attended was the assumptive tone from many of
            speakers that you would want a type safe codebase. I’ve long been a
            fan of TypeScript for example, but have found it to be somewhat
            polarizing as a topic. At GraphQL Conf and Prisma Day there was
            plenty of support for type safety in JavaScript whether with
            TypeScript or Flow.
          </p>
          <p />
          <p>
            88. If this is the kind of content that is interesting and useful to
            you and your work, I highly recommend these talks from GraphQL Conf.
          </p>
          <p />
          <p>89. So, have you heard about GraphQL?</p>
          <p />
          <p>
            90. At the close of the conference, Lee Byron noted the value of
            better abstractions, better syntax, and better mental models over
            the last 30 years of the web - the assertion being that GraphQL
            would be one of the better mental models that could take us forward.
          </p>
          <p />
          <p>91. How about the relationships that brought us here?</p>
          <p />
          <p>92. How about the relationships that will take us there?</p>
          <p />
          <p>
            93. Relationships thrive when they have shared language & shared
            goals
          </p>
          <p />
          <p>
            94. GraphQL can be the shared language for your teams as they drive
            towards shared goals.
          </p>
          <p />
          <p>
            95. GraphQL is an agreement (relationship) between the client and
            the server
          </p>
          <p />
          <p>96. It’s an agreement between your teams.</p>
          <p />
          <p>
            97. So don’t just think in terms of data graphs think in terms of
            relationships
          </p>
          <p />
          <p>This is the thought I’d like to leave you with.</p>
          <p />
          <p>98. Thank You</p>
          <p />
          <MailChimpSignupButton cta="Click here to get notified when I post new content" />
          <p />
          <p />
          <hr />
        </div>
      </Layout>
      <Footer />
    </div>
  )
}

export default TalkContent

export const query = graphql`
  {
    featuredPhoto: file(
      absolutePath: { regex: "/scaling-your-team-with-graphql/" }
    ) {
      publicURL
    }
  }
`

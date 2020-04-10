import React from "react";
import styled from "styled-components";
import MainLayout from "components/MainLayout";
import Searchbox from "components/Searchbox";
import Content, {
    PageTitle,
    PageDescription,
    Code,
    CodeBlock,
    TopicTitle,
    TopicBody,
    NotificationTip,
    NotificationNote,
} from "components/Content";
import Sidebar from "components/Sidebar";
import Wrapper from "components/Wrapper";
import SidebarCard from "components/SidebarCard";
import AdSkyscraper from "components/AdSkyscraper";
import Divider from "components/Divider";

const LearnHTMLIndex: React.FC = () => (
    <MainLayout>
        <Wrapper>
            <Sidebar>
                <SidebarCard
                    title="HTML Basics"
                    links={[
                        {
                            href: "/",
                            label: "Topic 1",
                        },
                        {
                            href: "/",
                            label: "Topic 2",
                        },
                        {
                            href: "/",
                            label: "Topic 3",
                        },
                        {
                            href: "/",
                            label: "Topic 4",
                        },
                        {
                            href: "/",
                            label: "Topic 5",
                        },
                    ]}
                />
                <SidebarCard
                    title="HTML Advanced"
                    links={[
                        {
                            href: "/",
                            label: "Topic 1",
                        },
                        {
                            href: "/",
                            label: "Topic 2",
                        },
                        {
                            href: "/",
                            label: "Topic 3",
                        },
                        {
                            href: "/",
                            label: "Topic 4",
                        },
                        {
                            href: "/",
                            label: "Topic 5",
                        },
                    ]}
                />
                <SidebarCard
                    title="HTML5 Features"
                    links={[
                        {
                            href: "/",
                            label: "Feature 1",
                        },
                        {
                            href: "/",
                            label: "Feature 2",
                        },
                        {
                            href: "/",
                            label: "Feature 3",
                        },
                        {
                            href: "/",
                            label: "Feature 4",
                        },
                        {
                            href: "/",
                            label: "Feature 5",
                        },
                        {
                            href: "/",
                            label: "Feature 6",
                        },
                        {
                            href: "/",
                            label: "Feature 7",
                        },
                    ]}
                />
                <SidebarCard
                    title="Popular Examples"
                    links={[
                        {
                            href: "/",
                            label: "Example 1",
                        },
                        {
                            href: "/",
                            label: "Example 2",
                        },
                        {
                            href: "/",
                            label: "Example 3",
                        },
                        {
                            href: "/",
                            label: "Example 4",
                        },
                        {
                            href: "/",
                            label: "Example 5",
                        },
                        {
                            href: "/",
                            label: "Example 6",
                        },
                        {
                            href: "/",
                            label: "Example 7",
                        },
                    ]}
                />
            </Sidebar>
            <Content>
                <PageTitle>HTML Tutorial</PageTitle>
                <PageDescription>
                    <p>HTML is the standard markup language for Web pages.</p>
                </PageDescription>
                <Divider />

                <TopicTitle>Headers and Paragraphs</TopicTitle>
                <TopicBody>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras vel est vitae arcu varius pulvinar. Nulla facilisi.
                        Pellentesque malesuada libero ligula, consequat
                        tristique velit scelerisque sit amet. Cras nec hendrerit
                        odio. Nunc gravida in nulla ac accumsan. Donec ac nisi
                        suscipit, egestas quam non, gravida tortor. Aenean sed
                        pharetra magna, vitae egestas purus. Integer urna neque,
                        scelerisque quis sagittis nec, tempor vitae dui. Proin
                        et efficitur eros. Pellentesque habitant morbi tristique
                        senectus et netus et malesuada fames ac turpis egestas.
                    </p>
                    <p>
                        Now, this is a sample <Code>{`<code></code>`}</Code>
                    </p>
                    <CodeBlock language="markup">
                        {`<html>\n\t<head>\n\t\t<title>Sample Title</title>\n\t</head>\n\t<body>\n\t\t<h1>Hello World!</h1>\n\t</body>\n</html>`}
                    </CodeBlock>
                    <NotificationTip>
                        We suggest you to use Notepad (on Windows), TextEdit (on
                        Mac) or some other simple text editor to do this; don't
                        use Word or WordPad! Once you understand the basic
                        principles, you may switch to more advanced tools such
                        as Adobe Dreamweaver.
                    </NotificationTip>
                    <NotificationNote>
                        We suggest you to use Notepad (on Windows), TextEdit (on
                        Mac) or some other simple text editor to do this; don't
                        use Word or WordPad! Once you understand the basic
                        principles, you may switch to more advanced tools such
                        as Adobe Dreamweaver.
                    </NotificationNote>
                </TopicBody>
            </Content>
            <Sidebar>
                <AdSkyscraper />
            </Sidebar>
        </Wrapper>
    </MainLayout>
);

export default LearnHTMLIndex;

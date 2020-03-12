import React from "react";
import {
  Text,
  Bold,
  Em,
  Href,
  Subtle,
  Code,
  UL,
  LI
} from "../../components/typography";
import MainLayout from "../../layouts/mainLayout";

const Typography = () => {
  return (
    <MainLayout>
        <Text type="h2">
          <Bold>Typography</Bold>
        </Text>
        <Text>
          Basic text writing, including headings, body text, lists, and more.
        </Text>
        <Text type="h3">When to use</Text>
        <UL>
          <LI>
            When need to display a title or paragraph contents in
            Articles/Blogs/Notes.
          </LI>
        </UL>
        <Text type="h3">Introduction</Text>
        <Text>
          <Code>
            <Em>
              Bricks-UI's typography can be used in designing and arranging
              various various typefaces, spacing and sizes. Various features
              like type, textstyle, color, size and user defined className are
              provied in our UI for better user experience.
            </Em>
          </Code>
        </Text>
        <Text type="h3">Examples</Text>
        <div className="item-wrapper">
          <Code>
            &lt;Text type="h1"&gt;Text Here&lt;/Text&gt; | type= h1, h2, h3, h4,
            h5, h6, meta, oversized, long.
          </Code>
          <Text type="h1">h1.Bricks-UI</Text>
          <Text type="h2">h2.Bricks-UI</Text>
          <Text type="h3">h3.Bricks-UI</Text>
          <Text type="h4">h4.Bricks-UI</Text>
          <Text type="h5">h5.Bricks-UI</Text>
          <Text type="h6">h6.Bricks-UI</Text>
          <Text type="meta">meta.Bricks-UI</Text>
          <Text type="oversized">oversized.Bricks-UI</Text>
          <Text type="long">long.Bricks-UI</Text>
        </div>
        <Text type="h3">Text Examples</Text>
        <div className="item-wrapper">
          <Code>
            &lt;Text type="meta" color="Color code" size="Font size" align="Text
            alignment" textstyle="normal, italic or oblique" weight="inherit,
            initial, revert, unset, normal, bold, bolder, lighter"
            className="User's CSS className"&gt;Text Here &lt;/Text&gt;
          </Code>
          <Text type="meta" color="red">
            Bricks-UI
          </Text>
          <Text type="long" color="green">
            Bricks-UI
          </Text>
          <Text color="blue" align="right" textstyle="italic" size="30px">
            Bricks-UI
          </Text>
          <Text color="skyblue" align="center" textstyle="oblique">
            Bricks-UI
          </Text>
          <Text type="meta" color="black" weight="bolder" size="20px">
            Bricks-UI
          </Text>
        </div>
        <Text type="h3">Other Examples</Text>
        <div className="item-wrapper">
          <Code>
            &lt;Code&gt;Text Here&lt;/Code&gt; This container is an example of
            &lt;Code&gt;
          </Code>
          <Text>Normal Text</Text>
          <Code>&lt;Text&gt;Text Here&lt;/Text&gt;</Code>
          <Bold>Bolded Text</Bold>
          <Code>&lt;Bold&gt;Text Here&lt;/Bold&gt;</Code>
          <Em>Emphasised Text</Em>
          <Code>&lt;Em&gt;Text Here&lt;/Em&gt;</Code>
          <Subtle>Subtle Text</Subtle>
          <Code>&lt;Subtle&gt;Text Here&lt;/Sublte&gt;</Code>
          <Href url="http://basobaas.com">Basobaas</Href>
          <Code>
            &lt;Href url="Your website link"&gt;Text Here&lt;/Code&gt;
          </Code>
        </div>
    </MainLayout>
  );
};

export default Typography;

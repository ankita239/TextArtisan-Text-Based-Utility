import React from "react";
import "flowbite";

export default function About(prop) {
  return (
    <>
      <div className={`mx-20 mt-10 ${prop.mode === 'dark'?'white':'black'}`}>
        <p className="">
        TextArtisan is a powerful and user-friendly application designed to offer comprehensive text analysis and manipulation features, ideal for writers, editors, students, and anyone dealing with text regularly. With TextArtisan, you can easily find the word and character counts of your text and estimate the reading time based on an average reading speed. The app allows you to convert text to uppercase, lowercase, title case, or sentence case, making text formatting effortless.</p>

<p className="mt-10">One of the standout features of TextArtisan is its text-to-speech functionality, which lets you listen to your text with ease. A convenient stop button allows you to halt the reading at any time, giving you full control over the process. Additionally, TextArtisan includes a quick copy to clipboard feature, enabling you to share or paste your text instantly without any hassle. The clear button allows you to start fresh with new text in a single click, without manually deleting the existing content.</p>

<p className="mt-10">TextArtisan is designed with simplicity in mind, ensuring accessibility for users of all technical levels. The real-time preview feature lets you see the immediate effects of your text modifications, providing a seamless editing experience. Whether you need to analyze, format, or listen to your text, TextArtisan is an essential tool that streamlines your workflow and enhances productivity, making it an indispensable asset for efficient text handling.</p>
        
      </div>
    </>
  );
}

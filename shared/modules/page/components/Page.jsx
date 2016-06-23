import React from 'react';

const getDangerousHtml = html => ({ __html: html });

const Page = ({ page }) => {
    return (
        <div>
            <h1>{page.title}</h1>
            <div dangerouslySetInnerHTML={ getDangerousHtml(page.content) } />
        </div>
    );
};

export default Page;
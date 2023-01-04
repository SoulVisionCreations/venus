import React from 'react';
import { animateMesh } from './Animations/animation';
import { renderHtml } from './Html/html';

export default function Experience({meshes, htmls})
{
    const renderMeshes = () => {
        return meshes.map((mesh, index) => {
            return animateMesh(mesh);
        })
    }

    const renderHtmls = () => {
        return htmls.map((html, index) => {
            return renderHtml(html);
        })
    }

    return (
    <>
        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />
        {meshes ? renderMeshes() : null}
        {htmls ? renderHtmls() : null}
    </>
    );
}
import React, { useEffect } from 'react';
import { renderHtml } from '../Html/html';
import { ImplicitObject } from '../ImplicitObject/implicitObject';
import { applySceneControl } from '../../Utils/SceneControls/sceneControl';

export default function Scene({implicitObjects, htmls, control, completelyVisible, completelyVisibleCount, setCompletelyVisibleCount})
{
    const renderImplicitObjects = () => {
        return implicitObjects.map((implicitObjectProps, index) => {
            return <ImplicitObject {...implicitObjectProps} key={index} completelyVisible={completelyVisible} completelyVisibleCount={completelyVisibleCount} setCompletelyVisibleCount={setCompletelyVisibleCount} />;
        })
    }

    const renderHtmls = () => {
        return htmls.map((html, index) => {
            return renderHtml(html);
        })
    }

    return (
    <>
        {control ? applySceneControl(control) : null}
        {implicitObjects ? renderImplicitObjects() : null}
        {htmls ? renderHtmls() : null}
    </>
    );
}
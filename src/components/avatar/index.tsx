import React from "react";
import "./index.scss";
import { AvatarProps } from "../../Interfaces";

const Avatar = (props: AvatarProps) => {
  return (
    <>
      {props.src ? (
        <>
          <div
            className={`bu-avatar-image-wrapper bu-avatar-image-shape-${
              props.shape ? props.shape : "default"
            } bu-avatar-image-size-${props.size ? props.size : "default"}`}
          >
            <img src={props.src} alt={props.alt ? props.alt : ""} />
            {props.badge ? (
              props.badge > 99 ? (
                <>
                  <div
                    className={`bu-avatar-badge bu-avatar-badge-${
                      props.size ? props.size : "default"
                    }`}
                    style={{
                      height:
                        props.size === "large"
                          ? 15
                          : props.size === "small"
                          ? 10
                          : 12,
                      padding: 4,
                      width:
                        props.size === "large"
                          ? 20
                          : props.size === "small"
                          ? 15
                          : 17,
                      top: -10,
                      right: -10,
                    }}
                  >
                    <span
                      style={{
                        left:
                          props.size === "large" || props.size === "small"
                            ? 1.5
                            : 1.5,
                        top:
                          props.size === "large"
                            ? 5.5
                            : props.size === "small"
                            ? 5
                            : 4.5,
                        fontSize:
                          props.size === "large"
                            ? 13
                            : props.size === "small"
                            ? 10
                            : 11,
                      }}
                    >
                      99+
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className={`bu-avatar-badge bu-avatar-badge-${
                      props.size ? props.size : "default"
                    }`}
                  >
                    <span
                      style={{
                        left:
                          props.badge > 9
                            ? props.size === "large"
                              ? 2.5
                              : 1.5
                            : props.size === "large"
                            ? 7
                            : 5,
                      }}
                    >
                      {props.badge}
                    </span>
                  </div>
                </>
              )
            ) : (
              <></>
            )}
          </div>
        </>
      ) : (
        <>
          <div
            className={`bu-avatar-wrapper bu-avatar-shape-${
              props.shape ? props.shape : "default"
            } bu-avatar-size-${props.size ? props.size : "default"} ${
              props.children ? "avatar-text" : ""
            }`}
            style={{ backgroundColor: props.bgColor }}
          >
            {props.icon ? (
              <>
                <div className="bu-avatar" style={{ color: props.color }}>
                  <span>{props.icon}</span>
                </div>
              </>
            ) : (
              <>
                {props.children ? (
                  <>
                    <div
                      className="bu-avatar-text"
                      style={{
                        fontSize: props.fontSize,
                        color: props.color,
                      }}
                    >
                      <span style={{ top: props.top, left: props.left }}>
                        {props.children}
                      </span>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </>
            )}
            {props.badge ? (
              props.badge > 99 ? (
                <>
                  <div
                    className={`bu-avatar-badge bu-avatar-badge-${
                      props.size ? props.size : "default"
                    }`}
                    style={{
                      height:
                        props.size === "large"
                          ? 15
                          : props.size === "small"
                          ? 10
                          : 12,
                      padding: 4,
                      width:
                        props.size === "large"
                          ? 20
                          : props.size === "small"
                          ? 15
                          : 17,
                      top: -10,
                      right: -10,
                    }}
                  >
                    <span
                      style={{
                        left:
                          props.size === "large" || props.size === "small"
                            ? 1.5
                            : 1.5,
                        top:
                          props.size === "large"
                            ? 5.5
                            : props.size === "small"
                            ? 5
                            : 4.5,
                        fontSize:
                          props.size === "large"
                            ? 13
                            : props.size === "small"
                            ? 10
                            : 11,
                      }}
                    >
                      99+
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className={`bu-avatar-badge bu-avatar-badge-${
                      props.size ? props.size : "default"
                    }`}
                  >
                    <span
                      style={{
                        left:
                          props.badge > 9
                            ? props.size === "large"
                              ? 2.5
                              : 1.5
                            : props.size === "large"
                            ? 7
                            : 5,
                      }}
                    >
                      {props.badge}
                    </span>
                  </div>
                </>
              )
            ) : (
              <></>
            )}
          </div>
        </>
      )}
    </>
  );
};
export default Avatar;

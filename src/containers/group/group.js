import React, {useContext} from "react";
import "./group.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {useNavigate} from "react-router-dom";

const groupMembers = {
  instructors: [
    {
      name: {
        en: "Jinkai Zheng",
        zh: "郑锦凯"
      },
      role: {
        en: "Associate Professor",
        zh: "副教授"
      },
      image: "path/to/john-doe.jpg",
      description: {
        en: "Hangzhou Dianzi University",
        zh: "杭州电子科技大学"
      },
      socialLinks: {
        googlescholar:
          "https://scholar.google.com/citations?user=1qoGuQMAAAAJ&hl=zh-CN&oi=ao",
        github: "https://github.com/JinkaiZheng",
        email: "zhengjinkai3@hdu.edu.cn"
      }
    },
    {
      name: {
        en: "Xinchen Liu",
        zh: "刘鑫辰"
      },
      role: {
        en: "Senior Researcher",
        zh: "资深高级研究员"
      },
      image: "path/to/john-doe.jpg",
      description: {
        en: "JD Explore Academy",
        zh: "京东探索研究院"
      },
      socialLinks: {
        googlescholar:
          "https://scholar.google.com/citations?user=1qoGuQMAAAAJ&hl=zh-CN&oi=ao",
        github: "https://linkedin.com/in/johndoe",
        email: "zhengjinkai3@hdu.edu.cn"
      }
    },
    {
      name: {
        en: "Wu Liu",
        zh: "刘武"
      },
      role: {
        en: "Professor",
        zh: "教授"
      },
      image: "path/to/john-doe.jpg",
      description: {
        en: "University of Science and Technology of China",
        zh: "中国科学技术大学"
      },
      socialLinks: {
        googlescholar:
          "https://scholar.google.com/citations?user=1qoGuQMAAAAJ&hl=zh-CN&oi=ao",
        github: "https://linkedin.com/in/johndoe",
        email: "zhengjinkai3@hdu.edu.cn"
      }
    }
  ],

  graduated: [
    {
      name: {
        en: "Jinxin Wang",
        zh: "王锦欣"
      },
      role: {
        en: "Class of XX",
        zh: "xx级"
      },
      image: "path/to/jane-smith.jpg",
      description: {
        en: "",
        zh: "入职华为"
      },
      socialLinks: {
        github: "https://linkedin.com/in/janesmith"
      }
    }
  ],
  graduateStudents: [
    {
      name: {
        en: "Lihao Wang",
        zh: "王立昊"
      },
      role: {
        en: "Graduate Student",
        zh: "22级"
      },
      image: "path/to/jane-smith.jpg",
      description: {
        en: "",
        zh: "步态识别"
      },
      socialLinks: {
        github: "https://linkedin.com/in/janesmith"
      }
    },
    {
      name: {
        en: "Shuping Yuan",
        zh: "袁淑萍"
      },
      role: {
        en: "Graduate Student",
        zh: "23级"
      },
      image: "path/to/jane-smith.jpg",
      description: {
        en: "",
        zh: "步态识别"
      },
      socialLinks: {
        github: "https://linkedin.com/in/janesmith"
      }
    },
    {
      name: {
        en: "Xuan Li",
        zh: "李轩"
      },
      role: {
        en: "Graduate Student",
        zh: "24级"
      },
      image: "path/to/jane-smith.jpg",
      description: {
        en: "",
        zh: "步态识别"
      },
      socialLinks: {
        github: "https://linkedin.com/in/janesmith"
      }
    },
    {
      name: {
        en: "Xinxiang Jin",
        zh: "金新翔"
      },
      role: {
        en: "Graduate Student",
        zh: "24级"
      },
      image: "path/to/jane-smith.jpg",
      description: {
        en: "",
        zh: "步态识别"
      },
      socialLinks: {
        github: "https://linkedin.com/in/janesmith"
      }
    },
    {
      name: {
        en: "Ce Yu",
        zh: "于策"
      },
      role: {
        en: "Graduate Student",
        zh: "24级"
      },
      image: "path/to/jane-smith.jpg",
      description: {
        en: "",
        zh: "步态识别"
      },
      socialLinks: {
        github: "https://linkedin.com/in/janesmith"
      }
    },
    {
      name: {
        en: "Jiaqing Wei",
        zh: "韦嘉庆"
      },
      role: {
        en: "Graduate Student",
        zh: "24级"
      },
      image: "path/to/jane-smith.jpg",
      description: {
        en: "",
        zh: "步态识别"
      },
      socialLinks: {
        github: "https://linkedin.com/in/janesmith"
      }
    },
    {
      name: {
        en: "Haofeng Chen",
        zh: "陈浩枫"
      },
      role: {
        en: "Graduate Student",
        zh: "25级"
      },
      image: "path/to/jane-smith.jpg",
      description: {
        en: "",
        zh: "视频质量评价"
      },
      socialLinks: {
        github: "https://linkedin.com/in/janesmith"
      }
    }
  ],
  undergraduateStudents: [
    {
      name: {
        en: "Undergraduate Student 1",
        zh: "林敏豪"
      },
      role: {
        en: "Undergraduate Student",
        zh: "本科生"
      },
      image: "path/to/jane-smith.jpg",
      description: {
        en: "",
        zh: ""
      },
      socialLinks: {
        github: "https://linkedin.com/in/janesmith"
      }
    },
    {
      name: {
        en: "Undergraduate Student 1",
        zh: "李家彬"
      },
      role: {
        en: "Undergraduate Student",
        zh: "本科生"
      },
      image: "path/to/jane-smith.jpg",
      description: {
        en: "",
        zh: ""
      },
      socialLinks: {
        github: "https://linkedin.com/in/janesmith"
      }
    },
    {
      name: {
        en: "Undergraduate Student 1",
        zh: "陈森"
      },
      role: {
        en: "Undergraduate Student",
        zh: "本科生"
      },
      image: "path/to/jane-smith.jpg",
      description: {
        en: "",
        zh: ""
      },
      socialLinks: {
        github: "https://linkedin.com/in/janesmith"
      }
    },
    {
      name: {
        en: "Undergraduate Student 1",
        zh: "邓晨曦"
      },
      role: {
        en: "Undergraduate Student",
        zh: "本科生"
      },
      image: "path/to/jane-smith.jpg",
      description: {
        en: "",
        zh: ""
      },
      socialLinks: {
        github: "https://linkedin.com/in/janesmith"
      }
    }
  ]
};

// export default function Group() {
//     const { isDark, isEn } = useContext(StyleContext);
//     const navigate = useNavigate();

//     const renderCategoryCard = (title, members) => (
//         <div className={isDark ? "dark-mode group-card" : "group-card"}>
//         <h3 className="group-card-title">{title}</h3>
//         <div className="group-card-members">
//             {members.slice(0, 4).map((member, i) => (
//             <p key={i} className="group-card-member">
//                 {isEn ? member.name.en : member.name.zh}
//             </p>
//             ))}
//         </div>
//         </div>
//     );

//     return (
//         <Fade bottom duration={1000} distance="20px">
//         <div className="main" id="group">
//             <div className="group-main-div">
//             <div className="group-header">
//                 <h1 className={isDark ? "dark-mode heading group-heading" : "heading group-heading"}>
//                 {isEn ? "Research Group" : "研究小组"}
//                 </h1>
//                 <button
//                 className="group-details-button"
//                 onClick={() => navigate("/group-details", { state: { groupMembers } })}
//                 >
//                 {isEn ? "View Details" : "查看详情"}
//                 </button>
//             </div>
//             <div className="group-cards-div">
//                 {renderCategoryCard(isEn ? "Instructors" : "指导教师", groupMembers.instructors)}
//                 {renderCategoryCard(isEn ? "Graduated Students" : "已毕业", groupMembers.graduated)}
//                 {renderCategoryCard(isEn ? "Graduate Students" : "研究生", groupMembers.graduateStudents)}
//                 {renderCategoryCard(isEn ? "Undergraduate Students" : "本科生", groupMembers.undergraduateStudents)}
//             </div>
//             </div>
//         </div>
//         </Fade>
//     );
// }

export default function Group() {
  const {isDark, isEn} = useContext(StyleContext);
  const navigate = useNavigate();

  const renderCategoryCard = (title, members) => (
    <div className={isDark ? "dark-mode group-card" : "group-card"}>
      <h3 className="group-card-title">{title}</h3>
      <div className="group-card-members">
        {members.map((member, i) => (
          <p key={i} className="group-card-member">
            {isEn ? member.name.en : member.name.zh}
          </p>
        ))}
      </div>
    </div>
  );

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="group">
        <div className="group-main-div">
          <div className="group-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading group-heading"
                  : "heading group-heading"
              }
            >
              {isEn ? "Research Group" : "研究小组"}
            </h1>
            <button
              className="group-details-button"
              onClick={() =>
                navigate("/group-details", {state: {groupMembers}})
              }
            >
              {isEn ? "View Details" : "查看详情"}
            </button>
          </div>
          <div className="group-cards-div">
            {renderCategoryCard(
              isEn ? "Instructors" : "指导教师",
              groupMembers.instructors
            )}
            {renderCategoryCard(
              isEn ? "Graduated Students" : "已毕业",
              groupMembers.graduated
            )}
            {renderCategoryCard(
              isEn ? "Graduate Students" : "研究生",
              groupMembers.graduateStudents
            )}
            {renderCategoryCard(
              isEn ? "Undergraduate Students" : "本科生",
              groupMembers.undergraduateStudents
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}

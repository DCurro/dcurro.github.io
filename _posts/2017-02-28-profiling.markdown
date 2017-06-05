---
layout: post
title:  "Building Usage Profiles Using Deep Neural Nets"
date:   2017-2-27 20:40:57
categories: machine learning
image: https://raw.githubusercontent.com/DCurro/dcurro.github.io/master/_assets/word_action.png
paper: https://arxiv.org/abs/1702.07424
poster: "ICSE_2017_Poster_Building_Usage_Profiles.pdf"
slides: "ICSE_2017_Slides_Building_Usage_Profiles.pdf"
data: https://zenodo.org/record/321921#.WTWO31KZNmA
---
To improve software quality, one needs to build test scenarios resembling the usage of a software product in the field. This task is rendered challenging when a product’s customer base is large and diverse. In this scenario, existing profiling approaches, such as operational profiling, are difficult to apply. In this work, we consider publicly available video tutorials of a product to profile usage. Our goal is to construct an automatic approach to extract information about user actions from instructional videos. To achieve this goal, we use a Deep Convolutional Neural Network (DCNN) to recognize user actions. Our pilot study shows that a DCNN trained to recognize user actions in video can classify five different actions in a collection of 236 publicly available Microsoft Word tutorial videos (published on YouTube). In our empirical evaluation we report a mean average precision of 94.42% across all actions. This study demonstrates the efficacy of DCNN- based methods for extracting software usage information from videos. Moreover, this approach may aid in other software engineering activities that require information about customer usage of a product.
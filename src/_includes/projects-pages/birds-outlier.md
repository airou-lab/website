With more advances in computer vision, studying animal behavior is now becoming easier with the help of animal classification and better detection and tracking algorithms. In this project, we set up an aviary of 15 sparrow birds in partnership with a Biology lab within The University of Oklahoma to try to understand behavior of the Sparrows over long spans of time. In AirLab, we are currently developing and implementing an outlier rejection model that supports multiple modes—landmark, sex, semantic segmentation, and any combination thereof. These modes sequentially filter out mismatched pairs based on specific criteria: 

- **Landmark mode** rejects matches that do not share the same closest enclosure landmark.

- **Sex mode** removes matches between birds of differing sexes.

- **Semantic segmentation mode** filters out matches where semantically similar regions (e.g., branches, nests) do not align.

The goal is to identify the best outlier rejection method to ensure correct matching of birds.  

Pictured below is an example of correct matching of a bird across two GoPro cameras with the semantic segmentation outlier rejection in use. 

![Correct match using semantic segmentation outlier rejection mode](/assets/images/semantic_match.png)

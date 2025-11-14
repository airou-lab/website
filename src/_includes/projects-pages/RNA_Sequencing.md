# Background:
Oxford Nanopore [1] has developed technologies that allow for sequencing of single molecules of DNA and RNA.
Sometimes the nucleotides have modifications called methylations which can have a wide variety of effects on the behavior of the RNA.
Machine learning algorithms have been developed and used to classify each individual nucleotides in the molecule sequence.
Several neural networks have been developed to run binary classification for a specific methylation at any given position in the sequences.

## RNA nucleotide modifications:
![Alt text](/assets/images/RNA_nucleotide_modifications.png)

## Oxford Nanopore machine:
![Alt text](/assets/images/Oxford_Nanopore_machine.png)
# Motivation:
Over 400 known methylations exist and only a handful of these have any classification models.
Signal noise and subtlety of signal differences between 5mers produces ambiguity in accurately predicting methylations.
Current models have mostly been trained on a single methylation detection in environments without other methylations. While these models can predict with high degrees of accuracy, they perform poorly in circumstances where other methylations are within their 5mer.
Many organizations have their own datasets and models, and some are unwilling/unable to share the data, though their models are made publicly available.
Training data is expensive and accumulation of data that will adequately train a model for all combinations of 5 of any 400+ nucleotide methylations is far off.
One idea to deal with growing numbers of predictive models and lack of access to training data was to directly fuse models. Unfortunately, these predictive models are complex neural networks that use different architectures, inputs, and outputs.

# Proposed Solution:
I am proposing the creation of a multiclass classification neural network model to identify any methylation encountered in any given sequence.
The OmniModel is designed with the expectation of frequent incremental learning as new training data becomes available.
Advantages:
The model will be flexible enough to be trained for as few or many methylations as are desired or available.
The model can be updated incrementally when new data is available without having to completely retrain.
A common architecture could hypothetically be fused with other models without having to retrain the model or share data.
Challenges:
Incremental learning presents challenges such as catastrophic forgetting.
Specialized algorithms for model fusion will be needed to ensure the best of both models is maintained and predictive abilities are not lost in the process.


# Progress:
Guppy base-calling via Dorado and Nanopolish [2] provide good features to train the OmniModel.
I have written preprocessing code that converts Nanopolish output files into an ingestible format for the OmniModel.
I have prepared unmodified tomato invitro transcribed RNA data and ran tests on the model.
I have processed modified RNA data and created labels for it, but poor accuracy indicates bad data or labels, or a need for a better training algorithm.

## OmniModel Structure:
![Alt text](/assets/images/omniModelStruct.png)
# References:
[1] Welcome to Oxford Nanopore Technologies. Oxford Nanopore Technologies. (n.d.). https://nanoporetech.com/
[2] Nanoporetech. (n.d.). Releases · nanoporetech/dorado. GitHub. https://github.com/nanoporetech/dorado/releases
[3] Cappannini, A. (n.d.). Modomics - a database of RNA modifications. https://genesilico.pl/modomics/modifications

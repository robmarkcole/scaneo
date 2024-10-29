from ...repos import AnnotationsDBRepo
from ...models import Annotation

def create_classification_annotation(image_id, label):	
	repo = AnnotationsDBRepo()
	annotation = repo.get_annotation_by_image_id(image_id, label, type="classification")
	if not annotation:
		print("no annotation found")
		annotation = Annotation(id=repo.generate_id(), type="classification", value=label, image_id=image_id)
		repo.create_annotation(annotation)
		return annotation
	print("annotation found")
	annotation.type = "classification" 
	annotation.value = label 
	repo.update_annotation(annotation)
	return annotation
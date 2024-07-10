from django.db import models

class Car(models.Model):
    model = models.CharField(max_length=100)
    price_per_day = models.DecimalField(max_digits=6, decimal_places=2)
    image = models.URLField()
    plate_no = models.CharField(max_length=7, unique=True)
    specifications = models.TextField()

    def __str__(self):
        return self.model

class Booking(models.Model):
    booking_no = models.CharField(max_length=100, unique=True)
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    customer_name = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField()

    def save(self, *args, **kwargs):
        if not self.booking_no:
            super(Booking, self).save(*args, **kwargs)
            self.booking_no = f"NO{self.id:03d}"
            kwargs['force_insert'] = False
        super(Booking, self).save(*args, **kwargs)


    def __str__(self):
        return f"Booking {self.id} - {self.customer_name}"
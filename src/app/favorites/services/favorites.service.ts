import { Injectable, inject } from '@angular/core';
import { Firestore, doc, setDoc, deleteDoc, collection, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private firestore = inject(Firestore);

  async addToFavorites(userId: string, char: any) {
    const ref = doc(this.firestore, `favorites/${userId}/items/${char.id}`);
    await setDoc(ref, char);
  }

  async removeFromFavorites(userId: string, charId: number) {
    const ref = doc(this.firestore, `favorites/${userId}/items/${charId}`);
    await deleteDoc(ref);
  }

  async getFavorites(userId: string): Promise<any[]> {
    const ref = collection(this.firestore, `favorites/${userId}/items`);
    const snapshot = await getDocs(ref);
    return snapshot.docs.map(doc => doc.data());
  }
}
